import { Navbar } from "components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home } from "pages/Home";
import { Other } from "pages/Other";
import { Login } from "pages/Login";
import { Register } from "pages/Register";

function App() {
	return (
		<Router>
			<Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
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
	);
}

export default App;
