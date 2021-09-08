import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from 'antd';

import { NavbarComp } from "components/NavbarComp";
import { Home } from "pages/Home";
import Realestate from "pages/Realestate";
import { Other } from "pages/Other";
import { Login } from "pages/Login";
import { Register } from "pages/Register";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	
	return (
		<Layout className="layout" style={{ backgroundColor: 'transparent' }}>
			<Router>
				<NavbarComp />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/real_estates/:id">
						<Realestate />
					</Route>
					<Route path="/other">
						<Other />
					</Route>
					<Route exact path="/login" component={Login} >
						<Login />
					</Route>
					<Route exact path="/register" component={Register} >
						<Register />
					</Route>
				</Switch>
			</Router>
		</Layout>
	);
}

export default App;
