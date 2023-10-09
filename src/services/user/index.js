import { useApi } from '../api';

export const UserServices = () => {
  const api = useApi('https://restful-booker.herokuapp.com', true);
  return {
    login: async (username, password) => {
      const response = await api.post('auth', {
        username,
        password,
      });
      return response;
    },
    logout: async () => {
      api().defaults.headers.head.Authorization = null;
    },
  };
};
