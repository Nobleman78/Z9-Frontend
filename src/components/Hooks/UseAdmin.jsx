import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import AuthContext from '../ContextApi/AuthContext';
import UseAxiosSecure from './UseAxiosSecure';

const UseAdmin = () => {
  const { user, loading: authLoading } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();

  const { data, isLoading, error } = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: async () => {
      if (!user?.email) return false;
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      return res.data.isAdmin;
    },
    enabled: !!user?.email && !authLoading,
  });

  return { isAdmin: data, isLoading, error };
};

export default UseAdmin;
