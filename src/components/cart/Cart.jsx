import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartContext } from '../cart/CartContext';
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from "../../utils/firebaseConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const Cart = () => {
  const cartProducts = useContext(CartContext);

  const createOrder = () => {
    const itemsForDB = cartProducts.cartList.map(item => ({
      id: item.itemId,
      title: item.nameItem,
      price: item.costItem
    }));

    cartProducts.cartList.forEach(async (item) => {
      const itemRef = doc(db, "products", item.itemId);
      await updateDoc(itemRef, {
        stock: increment(-item.qtyItem)
      });
    });

    let order = {
      client: {
        name: "Juan Perez",
        email: "juan.perez@gmail.com",
        phone: "1144558899"
      },
      total: cartProducts.calcTotal(),
      items: itemsForDB,
      date: serverTimestamp()
    };

    console.log(order);

    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    }

    createOrderInFirestore()
      .then(result => alert('Your order has been created. Please take note of the ID of your order.\n\n\nOrder ID: ' + result.id + '\n\n'))
      .catch(err => console.log(err));

    cartProducts.removeList();

  }

  return (
    <section className="shopping-cart-container">

      <div className="products-container">

        <h3 className="title">tus productos</h3>

        <div className="box-container">
          {
            cartProducts.cartList.length > 0 &&
            cartProducts.cartList.map(item =>
              <div className="box" key={item.itemId}>

                <FontAwesomeIcon icon={faTimes} onClick={() => cartProducts.deleteItem(item.itemId)}/>
                <img src={item.imgItem} alt="" />
                <div className="content">
                  <h3>{item.nameItem}</h3>
                  <span> quantity : </span>
                  <input type="number" name="" value={item.qtyItem} id="" readOnly/>
                  <br />
                  <span> Precio x Unidad: ${item.costItem}</span>
                  <br />
                  <span className="price">Total: ${cartProducts.calcTotalPerItem(item.itemId)} </span>
                </div>
              </div>
            )
          }
        </div>
      </div>

      <div className="cart-total">

        <h3 className="title"> resumen </h3>

        <div className="box">

          <h3 className="subtotal"> Subtotal: <span>${cartProducts.calcSubTotal()}</span> </h3>
          <h3 className="subtotal" id="iva"> IVA: <span>${cartProducts.calcTaxes()}</span> </h3>
          <h3 className="total"> Total: <span>${cartProducts.calcTotal()}</span> </h3>

          <button className="btn" onClick={createOrder}>Realizar Pedido</button>

        </div>

      </div>

    </section>
  );
}

export default Cart;