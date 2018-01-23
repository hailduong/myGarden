import React from "react";
import {connect} from "react-redux";
import * as Actions from "../misc/actions";
import {Button} from "react-onsenui";
import * as ons from "onsenui";


class AddPlant extends React.Component {

	state = {
		name: "",
		interval: 0
	};

	handleNameChange = (event) => {
		const name = event.target.value;
		this.setState({name: name})
	};

	handleIntervalChange = (event) => {
		const interval = event.target.value;
		this.setState({interval: interval})
	};

	addPlant = () => {
		const {name, interval} = this.state;
		this.props.addPlant(name, interval);
		ons.notification.toast({
			message: `<strong>${name}</strong> was added with interval <strong>${interval}</strong> day(s)`,
			timeout: 1500
		})
	};

	render() {
		return (
			<div className="container">
				<h1>Add new plant</h1>
				<form>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Name</label>
						<input onChange={this.handleNameChange} type="text" className="form-control" placeholder="e.g. Rose"/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Interval</label>
						<input onChange={this.handleIntervalChange} type="number" className="form-control" placeholder="days e.g. 3"/>
					</div>
					<Button onClick={this.addPlant}>Add</Button>
				</form>
			</div>
		)
	}
}


const mapDispatchToProps = (dispatch) => ({
	addPlant: (name, interval) => {
		dispatch(Actions.addPlant({name, interval}))
	}
});

export default connect(null, mapDispatchToProps)(AddPlant)