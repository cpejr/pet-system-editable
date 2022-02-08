/* eslint-disable max-len */
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../utils/api';

toast.configure();

const emptyContextInfo = {
  user: undefined,
  store: undefined,
  login: async () => null,
  logout: async () => null,
  forgottenPassword: async () => null,
  validateSession: async () => null,
  isLoading: true,
};

const AuthContext = React.createContext(emptyContextInfo);

function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined);
  const [store, setStore] = useState(undefined);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // eslint-disable-next-line consistent-return
  async function login(email, password) {
    try {
      const response = await api.post('login', { email, password });
      const res = await api.get(`attempts/${email}`);

      if (res.data.attempts < 4 && response.data.user !== undefined) {
        const body = {
          attempts: 0,
        };
        await api.put(`attempts/${email}`, body);
        router.push('/Home');
        toast('Login efetuado com sucesso', { position: toast.POSITION.BOTTOM_RIGHT });
      }
      if (response.data === 'Loja sem cadastro' || response.data === 'Loja em espera') {
        return response.data;
      }

      if (response.data.user !== undefined) {
        setUser(response.data.user);
      } else {
        setStore(response.data.store);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      toast('E-mail ou senha incorretos!', { position: toast.POSITION.BOTTOM_RIGHT });
    }
  }

  async function forgottenPassword(email) {
    try {
      await api.post('forgottenPassword', { email });
      router.push('/');
    } catch (error) {
      console.error(error); //eslint-disable-line
    }
  }

  async function logout() {
    try {
      await api.get('logout');
      setUser(undefined);
      setStore(undefined);
      router.push('/login');
    } catch (error) {
      console.error(error); //eslint-disable-line
    }
  }

  async function validateSession() {
    try {
      const response = await api.get('session');
      if (response.data.user !== undefined) {
        setUser(response.data.user);
        setIsLoading(false);
      } else {
        setStore(response.data.store);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error); //eslint-disable-line
    }
  }

  useEffect(() => {
    validateSession();
    if (!user && !store) {
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      user, store, login, setUser, logout, forgottenPassword, setStore, isLoading,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export default AuthContext;
export { AuthProvider, useAuth };
