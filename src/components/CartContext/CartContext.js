import { createContext, useContext, useState, useEffect } from 'react';
import api from "../../utils/api";
import { useAuth } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';

toast.configure();

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user, logout } = useAuth();
  const [cart, setCart] = useState(0);

  const addToCart = (product) => {
    setCart((old) => {
        const newCart = {
            ...old,
            [product.product_id]: product.product_id,
        }
        window.localStorage.setItem('cart', JSON.stringify(newCart))
        return newCart;
    })
  };

  useEffect(() => {
    if (user && user.type === 'buyer') {
      api.get('cart/amount').then((response) => {
        console.log(response.data);
        setCart(JSON.parse(response.data));
      }).catch((error) => {
        console.log(error);
        toast('Erro ao obter quantidade de itens no carrinho', { position: toast.POSITION.BOTTOM_RIGHT });
      });
    } else {
      setCart(0);
    }
  }, [addToCart], []);

const removeFromCart = (productId) => {
    setCart(old => {
        const newCart = {}
        Object.keys(old).forEach(id => {
            if(id !== productId) {
                newCart[id] = old[id]
            }
        })
        window.localStorage.setItem('cart', JSON.stringify(newCart))
        return newCart;
    })
}
const removeAllFromCart = () => {
    setCart(old => {
        const newCart = {}
        window.localStorage.setItem('cart', JSON.stringify(newCart))
        return newCart
    })
}
    return(
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, removeAllFromCart }}>
        {children}
    </CartContext.Provider>
    )
}



export const useCart = () => {
    const cart = useContext(CartContext);
    return cart;
}
  


