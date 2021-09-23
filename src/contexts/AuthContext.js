import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import api from '../utils/api';

toast.configure();

const emptyContextInfo = {
  user: undefined,
  login: async () => null,
  logout: async () => null,
  forgottenPassword: async () => null,
  validateSession: async () => null,
};

const AuthContext = React.createContext(emptyContextInfo);

function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined);
  const router = useRouter();

  async function login(email, password) {
    try {
      const response = await api.post('login', { email, password });
      setUser(response.data.user);
      router.push('/');
      toast('Login efetuado com sucesso', { position: toast.POSITION.BOTTOM_RIGHT });
    } catch (error) {
      console.error(error); //eslint-disable-line
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
      router.push('/');
    } catch (error) {
      console.error(error); //eslint-disable-line
    }
  }

  async function validateSession() {
    try {
      const response = await api.get('session');
      setUser(response.data.user);
    } catch (error) {
      console.error(error); //eslint-disable-line
    }
  }

  useEffect(() => {
    validateSession();
  }, []);

  return (
    <AuthContext.Provider value={{
      user, login, setUser, logout, forgottenPassword,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export default AuthContext;
export { AuthProvider, useAuth };
