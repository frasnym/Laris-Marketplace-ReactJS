import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./containers/HomePage/HomePage";
import ProductDetailPage from "./containers/ProductDetailPage/ProductDetailPage";

import "./assets/css/bootstrap.min.css";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route
						path="/product-detail"
						component={ProductDetailPage}
					/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
