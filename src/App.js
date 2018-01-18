import React from 'react';
import Home from "./Home/Home.js";
import AddPlant from "./AddPlant/AddPlant";
import {Route, BrowserRouter} from "react-router-dom";
import TabNavigator from "./TabNavigator";

export default class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<h1>myGarden</h1>
					<TabNavigator/>
					<Route exact path="/" component={Home}/>
					<Route exact path="/add-plant" component={AddPlant}/>
				</div>
			</BrowserRouter>
		)
	}

}