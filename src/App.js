import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout } from 'antd';

import { Navbar } from "components/Navbar";
import { Home } from "pages/Home";
import Realestate from "pages/Realestate";
import { Other } from "pages/Other";
import { Login } from "pages/Login";
import { Register } from "pages/Register";
import { findRealestates } from './redux/realestates/realestatesActions'
import Cookies from 'js-cookie';
import { getUser } from 'redux/auth/authActions';

function App() {
  const dispatch = useDispatch()
	const flats = useSelector(state => state.realestates.realestates) || []
	const user = useSelector(state => state.auth.user) || {}; 
  const [fetchOnce, setFetchOnce] = React.useState(false);
	
	React.useEffect(() => {
    if (!fetchOnce) {
      dispatch(findRealestates(`real_estates`))
      setFetchOnce(true)
    }
	}, [fetchOnce, dispatch, flats, user])
	
	return (
		<Layout className="layout" style={{ backgroundColor: 'transparent' }}>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home flats={flats} />
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
