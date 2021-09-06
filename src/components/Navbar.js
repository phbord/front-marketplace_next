import React from 'react'
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;
export const Navbar = () => {
	return (
		<Layout>
		
			<Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
					<Menu.Item key="1">
						Home
					</Menu.Item>
					<Menu.Item key="2">
						Other Link
					</Menu.Item>
				</Menu>
			</Header>
		</Layout>
	)
}
