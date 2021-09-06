import React from 'react'
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

export const Navbar = () => {
	return (
		<Header style={{ position: "fixed", zIndex: 1, width: "100%", display: "flex" }}>
			<h1 className="logo">Real Estate</h1>
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
				<Menu.Item key="1">
					<Link to="/">Home</Link>
				</Menu.Item>
				<Menu.Item key="2">
					<Link to="/other">other</Link>
				</Menu.Item>
				<Menu.Item key="3">
					<Link to="/login">login</Link>
				</Menu.Item>
				<Menu.Item key="4">
					<Link to="/register">register</Link>
				</Menu.Item>
			</Menu>
		</Header>
	)
}
