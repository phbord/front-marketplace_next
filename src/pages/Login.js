import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "redux/auth/authActions";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const logMeIn = (e) => {
    e.preventDefault();
    const creds = {
      user: {
        email,
        password
      }
    };
    dispatch(login(creds));
    history.push('/');
  };

  return (
    <>
      <div className="login">
        <h1>Login</h1>
        <form className= "login-form" onSubmit={e => logMeIn(e)}>
          <input type="text" id="email" placeholder="Your email" onChange={e => setEmail(e.target.value)} />
          <input type="password" id="password" placeholder="Your Password" onChange={e => setPassword(e.target.value)} />
          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  );
};

export default Login;
