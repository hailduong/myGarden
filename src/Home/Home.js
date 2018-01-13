import React from "react";
import PlantList from "./PlantList";
import BottomNavBar from "./BottomNavBar";

export default class Home extends React.Component {
	render() {
		return (
			<div className="container home">
				<h1>myGarden</h1>
				<hr/>
				<PlantList/>
				<BottomNavBar/>
			</div>
		)
	}

	addServiceWorker() {
		if ('serviceWorker' in navigator) {
			window.addEventListener('load', function() {
				navigator.serviceWorker.register('./serviceWorker.js').then(function(registration) {
					// Registration was successful
					console.log('ServiceWorker registration successful with scope: ', registration.scope);
				}, function(err) {
					// registration failed :(
					console.log('ServiceWorker registration failed: ', err);
				});
			});
		}
	}

	componentDidMount() {
		
		this.addServiceWorker();
	}
}