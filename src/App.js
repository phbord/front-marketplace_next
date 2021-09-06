import { Navbar } from "components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "antd/dist/antd.css";
import { Home } from "pages/Home";
import { Other } from "pages/Other";
import { Layout } from "antd";
import { Login } from "pages/Login";
import { Register } from "pages/Register";

const { Content } = Layout;
function App() {
	return (

		<Router>
			<Navbar />
			<Content className="site-layout" style={{ padding: "0 50px", marginTop: 64 }}>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/other">
					<Other />
				</Route>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route exact path="/register">
					<Register />
				</Route>
			</Switch>
			</Content>
		</Router>

	);
}

export default App;
