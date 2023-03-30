import {useAuth} from '../contexts/AuthContext';
// {
//   method,
//   body,
// }

function apiRequest(url, method, options) {

  const request = {
    method,
    ...options
  }
  console.log(request);

  return fetch(url, request);
}


const useApiRequest = () => {
  const auth = useAuth();

  return apiRequest(undefined, undefined, undefined);
}

export default useApiRequest;
