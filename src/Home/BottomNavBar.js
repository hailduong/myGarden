import React from "react";

export default class BottomNavBar extends React.Component{
	render(){
		return(
			<nav className="navbar navbar-default navbar-fixed-bottom">
				<div className="container">
					<div className="col-xs-6">
						<select className="form-control">
							<option value="10-30-20">
								Yellow: 10-30-20
							</option>
							<option value="30-15-10">
								Green: 30-15-10
							</option>
							<option value="15-20-25">
								Pink: 15-20-25
							</option>
							<option value="12-12-17">
								Purple: 12-12-17
							</option>
							<option value="17-12-7">
								Green: 17-12-7
							</option>
						</select>
					</div>
					<div className="col-xs-6">
						<select className="form-control">
							<option value="0.5">
								0.5 spoon
							</option>
							<option value="1">
								1 spoon
							</option>
							<option value="0.25">
								0.25 spoon
							</option>
							<option value="2">
								2 spoon
							</option>
						</select>
					</div>
				</div>
			</nav>
		)
	}
}