import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartContext } from '../cart/CartContext';
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from "../../utils/firebaseConfig";


const Cart = () => {
  const test = useContext(CartContext);

  const createOrder = () => {
    const itemsForDB = test.cartList.map(item => ({
      id: item.idItem,
      title: item.nameItem,
      price: item.costItem
    }));

    test.cartList.forEach(async (item) => {
      const itemRef = doc(db, "products", item.idItem);
      await updateDoc(itemRef, {
        stock: increment(-item.qtyItem)
      });
    });

    let order = {
      buyer: {
        name: "Leo Messi",
        email: "leo@messi.com",
        phone: "123456789"
      },
      total: test.calcTotal(),
      items: itemsForDB,
      date: serverTimestamp()
    };

    console.log(order);

    const createOrderInFirestore = async () => {
      // Add a new document with a generated id
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    }

    createOrderInFirestore()
      .then(result => alert('Your order has been created. Please take note of the ID of your order.\n\n\nOrder ID: ' + result.id + '\n\n'))
      .catch(err => console.log(err));

    test.removeList();

  }

  return (
    <section className="shopping-cart-container">

      <div className="products-container">

        <h3 className="title">tus productos</h3>

        <div className="box-container">


        </div>

      </div>

      <div className="cart-total">

        <h3 className="title"> resumen </h3>

        <div className="box">

          <h3 className="subtotal"> Subtotal: <span>$0</span> </h3>
          <h3 className="subtotal" id="iva"> IVA: <span>$0</span> </h3>
          <h3 className="total"> Total: <span>$0</span> </h3>

          <a href="#" className="btn">realizar pedido</a>

        </div>

      </div>

    </section>
  );
}

export default Cart;