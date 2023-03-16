import {useAuth} from '../contexts/AuthContext';
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [ register_email, setRegisterEmail ] = useState("");
  const [ register_password, setRegisterPassword] = useState("");
  const [ login_email, setLoginEmail ] = useState("");
  const [ login_password, setLoginPassword] = useState("");
  const [ confirm_password, setConfirmPassword ] = useState("");
  const [ error, setError ] = useState("");
  const { register, user, login, logout } =  useAuth();
  const [ creating_account, setCreatingAccount ] = useState(false);

  const navigate = useNavigate();

  const  handleSubmitRegister = async (e) => {
    e.preventDefault();
    if(confirm_password !== register_password){
      return setError("Amor, te has equivocado poniendo la contrasenya");
    }
    try{
      setError('');
      setCreatingAccount(true);
      await register(register_email, register_password);
      navigate("/");
    } catch(e) {
      setError("No se ha podido crear la cuenta");
    }
    setCreatingAccount(false);
  };

  const handleSubmitLogin = async e => {
    e.preventDefault();
    await login(login_email, login_password);
    navigate("/");
  };
  return (
    <div className="App">
      <div>
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          type={"password"}
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <input
          type={"password"}
          placeholder="Confirm Password..."
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />
        {!creating_account && <button onClick={handleSubmitRegister}> Create User</button>}
        <span>{error}</span>
      </div>

      <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          type={"password"}
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <button onClick={handleSubmitLogin}> Login</button>
      </div>

      <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button>
    </div>
  );
};


export default Register;
