import { useAuth } from '../contexts/AuthContext.js';
import useApiRequest  from '../hooks/useApiRequest.js';
import { useState, useEffect } from 'react';
const  UserPopover = () => {
  const [name, setName] = useState('aaa');
  const apiRequest = useApiRequest();
  const { user } = useAuth();
  const uid = user.uid;

  useEffect( () =>
    {
      apiRequest(`/users/firebase/${uid}`, "GET")
        .then(response => response.json())
        .then(user => setName(user[0].first_name));

    }, [apiRequest, uid]);

  return <span>hola {name}</span>;
};

export default UserPopover;
