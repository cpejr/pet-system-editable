import {
  createContext, useContext, useState, useEffect,
} from 'react';
import { toast } from 'react-toastify';
import api from '../../utils/api';
import { useAuth } from '../../contexts/AuthContext';

toast.configure();

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cart, setCart] = useState(0);

  const addToCart = (product) => {
    setCart((old) => {
      const newCart = {
        ...old,
        [product.product_id]: product.product_id,
      };
      window.localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  useEffect(() => {
    if (user && user?.type === 'buyer') {
      api.get('cart/amount').then((response) => {
        setCart(JSON.parse(response.data));
      }).catch(() => {
        toast('Erro ao obter quantidade de itens no carrinho', { position: toast.POSITION.BOTTOM_RIGHT });
      });
    } else {
      setCart(0);
    }
  }, [addToCart], []);

  const removeFromCart = (productId) => {
    setCart((old) => {
      const newCart = {};
      Object.keys(old).forEach((id) => {
        if (id !== productId) {
          newCart[id] = old[id];
        }
      });
      window.localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const removeAllFromCart = () => {
    setCart(() => {
      const newCart = {};
      window.localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart, addToCart, removeFromCart, removeAllFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};
