import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "redux/auth/authActions";
import { Form , Button } from "react-bootstrap";

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

      <Form className= "login-form" onSubmit={e => logMeIn(e)}>
      <h1>Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
          <Button variant="primary" type="submit" >
              Submit
          </Button>
        </Form>

      </div>
    </>
  );
};

export default Login;
