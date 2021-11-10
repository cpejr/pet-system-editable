import { useContext, useEffect, useState } from 'react';
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
};

const AuthContext = React.createContext(emptyContextInfo);

function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined);
  const [store, setStore] = useState(undefined);
  const router = useRouter();

  async function login(email, password) {
    try {
      const response = await api.post('login', { email, password });
      if (response.data.user !== undefined) {
        setUser(response.data.user);
      } else {
        setStore(response.data.store);
      }
      router.push('/Home');
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
      } else {
        setStore(response.data.store);
      }
    } catch (error) {
      console.error(error); //eslint-disable-line
    }
  }

  useEffect(() => {
    validateSession();
  }, []);

  return (
    <AuthContext.Provider value={{
      user, store, login, setUser, logout, forgottenPassword, setStore,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export default AuthContext;
export { AuthProvider, useAuth };
