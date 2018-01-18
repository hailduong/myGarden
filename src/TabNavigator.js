import React from "react";
import {Link} from "react-router-dom";


export default class TabNavigator extends React.Component {
	render() {

		const currentPath = location.pathname;

		return (
			<ul className="nav nav-tabs">
				<li role="presentation" className={currentPath === "/" ? "active" : ""}><Link to="/">Home</Link></li>
				<li role="presentation" className={currentPath === "/add-plant" ? "active" : ""}><Link to="/add-plant">Add Plant</Link>
				</li>
			</ul>
		)
	}
} 