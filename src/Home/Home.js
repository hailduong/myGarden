import React from "react";
import PlantList from "./PlantList";
import BottomNavBar from "./BottomNavBar";


export default class Home extends React.Component {
	render() {
		return (
			<div className="container home">
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

	requestFullScreen() {
		const doc = window.document;
		const docEl = doc.documentElement;

		const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
		const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

		if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
			requestFullScreen.call(docEl);
		}
		else {
			cancelFullScreen.call(doc);
		}
	}

	componentDidMount() {

		//this.addServiceWorker();
	}
}