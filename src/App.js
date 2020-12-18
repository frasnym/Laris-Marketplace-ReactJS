import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./containers/HomePage/HomePage";

import "./assets/css/bootstrap.min.css";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" component={HomePage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
