import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '../utils/api';

const emptyContextInfo = {
  user: undefined,
  login: async () => null,
  logout: async () => null,
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
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export default AuthContext;
export { AuthProvider, useAuth };
