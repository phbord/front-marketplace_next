import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from 'antd';

import { NavbarComp } from "components/NavbarComp";
import { Home } from "pages/Home";
import Realestate from "pages/Realestate";
import NewRealestate from "pages/NewRealestate";
import { Other } from "pages/Other";
import { Login } from "pages/Login";
import { Register } from "pages/Register";
import Profile from "pages/Profile";
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/auth/authActions';
import Cookies from 'js-cookie';
import { baseName } from 'services/api';

function App() {
	const dispatch = useDispatch();
	const user = useSelector(state => state.auth.user);

	React.useEffect(() => {
		dispatch(getUser(Cookies.get('id')))
		console.log(user)
	}, [])

	return (
		<Layout className="layout" style={{ backgroundColor: 'transparent' }}>
			<Router basename={baseName}>
				<NavbarComp />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/real_estates/:id">
						<Realestate />
					</Route>
					<Route path="/new_real_estate">
						<NewRealestate crud="create" />
					</Route>
					<Route exact path="/update_real_estate/:id">
						<NewRealestate crud="update" />
					</Route>
					<Route path="/other">
						<Other />
					</Route>
					<Route exact path="/login" >
						<Login />
					</Route>
					<Route exact path="/register" >
						<Register />
					</Route>
					<Route exact path="/profile" >
						<Profile user={user} />
					</Route>
				</Switch>
			</Router>
		</Layout>
	);
}

export default App;
