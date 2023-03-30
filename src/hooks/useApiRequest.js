import {useAuth} from '../contexts/AuthContext';
import {useCallback} from 'react';
// {
//   method,
//   body,
// }

// function apiRequest(url, method, options) {
//   const request = {
//     method,
//     ...options
//   };
//   console.log(request);
//   return fetch(url, request);
// }

const useApiRequest = () => {
  const auth = useAuth();
  const apiRequest = useCallback((url,method, options) => {
    const headers = {
      token: auth.token,
    };

    const request = {
        headers,
        method,
        ...options
      };
      return fetch(url, request);
  }, [auth.token]);

  return apiRequest;
};

export default useApiRequest;
