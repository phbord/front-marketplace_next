import React from 'react'
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

export const Navbar = () => {
	return (
		<Layout style={{ position: "fixed", zIndex: 1, width: "100%" }}>
			<Header>
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
					<Menu.Item key="1">
						<Link to="/">Home</Link>
					</Menu.Item>
					<Menu.Item key="2">
						<Link to="/other">other</Link>
					</Menu.Item>
				</Menu>
			</Header>
		</Layout>
	)
}
