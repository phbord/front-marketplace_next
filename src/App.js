import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

function App() {
	const dispatch = useDispatch();
	const user = useSelector(state => state.auth.user);

	React.useEffect(() => {
		if (user === null) {
			dispatch(getUser(Cookies.get('id')))
			console.log(user)
		}
	}, [])

	return (
			<Router>
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

	);
}

export default App;
