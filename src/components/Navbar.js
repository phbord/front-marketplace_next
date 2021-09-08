import { useEffect, useState } from 'react'
import { Layout, Menu } from "antd";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/authActions";

const { Header } = Layout;

export const Navbar = () => {

	const history = useHistory();
  const cookie = Cookies.get('token');
  const dispatch = useDispatch();

  const logMeOut = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push('/');
  }

	return (
		<nav className="navbar">
      <h1>THPGram</h1>
      <Link to="/">Home</Link>
      {cookie && <Link to="/profile">Profile</Link>}
      {cookie && <Link to="#" onClick={e => logMeOut(e)}>Logout</Link>}
      {!cookie && <Link to="/login">Login</Link>}
      {!cookie && <Link to="/register">Register</Link>}
    </nav>
	)
}
