import {useAuth} from '../contexts/AuthContext';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUpScreen = () => {

  const [ login_email, setLoginEmail ] = useState("");
  const [ login_password, setLoginPassword] = useState("");
  const [ error, setError ] = useState("");
  const { register, user, login, logout } =  useAuth();

  const navigate = useNavigate();

    const handleSubmitLogin = async e => {
    e.preventDefault();
    await login(login_email, login_password);
    navigate("/");
  };
  return (
      <div style={{gap: '1em', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>

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
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column', gap:'0.2em'}}>  
          <h4> User Logged In: </h4>
          {user?.email}
          <button onClick={logout}> Sign Out </button>
        </div>
      <Link to='/register'> No tienes cuenta? Clica Aqui para registrarte</Link>

    </div>
  );
};


export default SignUpScreen;
