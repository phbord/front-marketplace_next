import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { register } from "redux/auth/authActions";
import { Form , Button } from "react-bootstrap";

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
	
  const dispatch = useDispatch();
  const history = useHistory();

  const registerMeIn = (e) => {
    e.preventDefault();
    const creds = {
      user: {
        email,
        password
      }
    };
    dispatch(register(creds));
    history.push('/');
  };

  return (
    <>
      <div className="register">

        <Form className= "register-form" onSubmit={e => registerMeIn(e)}> 
          <h1>Register</h1>
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


