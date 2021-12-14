import { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  useEffect(() => {
    const cartLocal = window.localStorage.getItem('cart');
    if(cartLocal) {
        setCart(JSON.parse(cartLocal));
    }
  }, [])

  const addToCart = (product) => {
        // setCart((old) => ({ 
        //   ...old,
        //   [product.product_id]: product,
        //   }
        // //   window.localStorage.setItem('cart', JSON.stringify(cart))
        // //   return cart
        //   ))
        // }
    setCart((old) => {
        const newCart = {
            ...old,
            [product.product_id]: product,
        }
        window.localStorage.setItem('cart', JSON.stringify(newCart))
        return newCart
    })
}
const removeFromCart = (productId) => {
    setCart(old => {
        const newCart = {}
        Object.keys(old).forEach(id => {
            if(id !== productId) {
                newCart[id] = old[id]
            }
        })
        window.localStorage.setItem('cart', JSON.stringify(newCart))
        return newCart
    })
}
    return(
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
        {children}
    </CartContext.Provider>
    )
}



export const useCart = () => {
    const cart = useContext(CartContext);
    return cart;
}
  


