import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../auth/firebase-config.js'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
}             from '@firebase/auth';

const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {

  const [ loading, setLoading ] = useState(true);

  const [ user, setUser ] = useState({});

  useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);


  const login = async (login_email, login_password) =>{
    try{
      const user = await signInWithEmailAndPassword(
        auth,
        login_email,
        login_password
      );
      console.log(user);
    } catch(err){
      console.log(err.message);
    }
  };
  const logout = async () =>{
    await signOut(auth);
  };

  const register = async(register_email, register_password) =>{
    try{
      const user = await createUserWithEmailAndPassword(
        auth,
        register_email,
        register_password
      );
      console.log(user);
    } catch(err){
      console.log(err.message);
    }

  };

  const value = {
    user,
    login,
    logout,
    register,
  };

  return(
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
