import { Navbar } from "components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home } from "pages/Home";
import { Other } from "pages/Other";

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
      </Switch>
		</Router>
	);
}

export default App;
