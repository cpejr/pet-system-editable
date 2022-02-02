import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import FullPageLoader from '../../FullPageLoader';
import api from '../../../utils/api';

const withAuthStore = (Component) => {
  const AuthenticatedComponent = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    const verify = async () => {
      try {
        const response = await api.get('session');
        if (!response?.data?.store) {
          router.push('/Home');
        } else {
          setLoading(false);
        }
      } catch (error) {
        router.push('/Home');
      }
    };

    useEffect(() => {
      verify();
    }, []);

    return loading ? <FullPageLoader /> : <Component />; // Render whatever you want while the authentication occurs
  };

  return AuthenticatedComponent;
};
export default withAuthStore;
