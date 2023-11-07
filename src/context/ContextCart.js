import { createContext, useState , useContext} from "react";

const CartContext = createContext ();

export const useCartContext = ()=> useContext(CartContext)

export const CartContextProvider =(props)=>{
    const [cart, setCart] = useState([]);
    
    

    const isInCart = (id) => {
        
        return cart.find(phone => phone.id === id)    
    }

    const addItem = (phone, cant) => {
        if(isInCart(phone.id)) {
            const index = cart.findIndex(prod => prod.id === phone.id)
            const aux = [...cart]
            aux[index].cant = cant
            setCart(aux)
        } else {
            const newProduct = {
                ...phone,
                cant: cant
            }
            
            setCart([...cart,newProduct])
        }
    }

    const emptyCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }

    const getItemQuantity = () => {
        return cart.reduce((acum,prod) => acum += prod.cant, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acum, prod) => acum += (prod.cant * prod.precio), 0)
    }
    console.log(cart)
    return (
        <CartContext.Provider value={{cart, isInCart, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}}>
            {props.children}
        </CartContext.Provider>
    )

}


