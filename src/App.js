import React from 'react';
import Home from "./Home/Home.js";
import AddPlant from "./AddPlant/AddPlant";
import {Route, BrowserRouter} from "react-router-dom";


export default class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact path="/myGarden/public/index.html" component={Home}/>
					{/*<Route exact path="/myGarden/public/index.html" component={AddPlant}/>*/}
				</div>
			</BrowserRouter>
		)
	}

}