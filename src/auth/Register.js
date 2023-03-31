import {useAuth} from '../contexts/AuthContext';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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
      <div style={{gap: '1em', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
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
        <div> <Link to='/login'> Ya tienes cuenta? Clica Aqui para logearte</Link></div>
    </div>
  );
};


export default Register;
