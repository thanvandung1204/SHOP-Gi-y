import { createContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
export const Context = createContext();

const AppContext = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);
    const [cartCount, setcartCount] = useState(0);
    const [cartSubtotal, setcartSubtotal] = useState([]);
    const location = useLocation()

    useEffect(() => { },[cartItem])
    const handelAddcart = (product, quanlity) => {
        let items = [...cartItem]
        let index = items.findIndex(item => item.id === product.id)
        if (index !== -1) {
            items[index].attributes.quanlity += quanlity
        } else {
            product.attributes.quanlity = quanlity
            items = [...items,product]
        }
        setCartItem(items)

     }
    const handelRemovecart = (product) => {
        let items = [...cartItem]
        items = items.filter(item => item.id !== product.id)
        setCartItem(items)

    }
    const handelQuanlitycart = (product) => {}
    

    return (
        <Context.Provider value={{
            cartItem,
            setCartItem,
            cartCount,
            setcartCount,
            cartSubtotal,
            setcartSubtotal,
            handelAddcart,
            handelRemovecart,
            handelQuanlitycart
        }}>
            
            {children}
        </Context.Provider>
    )
}
export default AppContext;