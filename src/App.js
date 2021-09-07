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

function App() {
  const dispatch = useDispatch()
	const flats = useSelector(state => state.realestates.realestates) || {}
  const [fetchOnce, setFetchOnce] = React.useState(false);
	
	React.useEffect(() => {
    if (!fetchOnce) {
      dispatch(findRealestates(`real_estates`))
      setFetchOnce(true)
    }
	}, [fetchOnce, dispatch, flats])
	
	return (
		<Layout className="layout" style={{ backgroundColor: 'transparent' }}>
			<Router>
				<Navbar />
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
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
				</Switch>
			</Router>
		</Layout>
	);
}

export default App;
