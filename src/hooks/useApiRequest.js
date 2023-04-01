import {useAuth}     from '../contexts/AuthContext';
import {useCallback} from 'react';

const useApiRequest = () => {
  const auth = useAuth();
  const apiRequest = useCallback((url,method, options) => {
    const headers = {

    };
    const complete_url = process.env.REACT_APP_API_URL + url;
    const request = {
        headers,
        method,
        ...options
      };
      return fetch(complete_url, request);
  }, []);

  return apiRequest;
};

export default useApiRequest;
