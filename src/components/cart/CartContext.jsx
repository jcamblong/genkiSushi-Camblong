import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        let found = cartList.find(product => product.itemId === item.id);
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                    itemId: item.id,
                    imgItem: item.image,
                    nameItem: item.name,
                    costItem: item.price,
                    qtyItem: qty
                }
            ]);
        } else {
            found.qtyItem += qty;
            setCartList([
                ...cartList
            ]);
        }
    }
    
    const removeList = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.itemId != id);
        setCartList(result);
    }

    const calcTotalPerItem = (itemId) => {
        let index = cartList.map(item => item.itemId).indexOf(itemId);
        return cartList[index].costItem * cartList[index].qtyItem;
    }

    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.itemId));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcTaxes = () => {
        return calcSubTotal() * 0.18;
    }

    const calcTotal = () => {
        return calcSubTotal();
    }

    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return (
        <CartContext.Provider value={{
            cartList, 
            addToCart, 
            removeList, 
            deleteItem, 
            calcTotalPerItem, 
            calcSubTotal, 
            calcTaxes, 
            calcTotal,
            calcItemsQty
        }}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;