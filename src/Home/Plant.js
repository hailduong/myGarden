import React from "react";

export default class Plant extends React.Component {

	fertilize = () => {
		const {fertilize} = this.props;
		const {id} = this.props.data;
		const time = new Date.now();
		const {type, amount} = this.props.fertilizerInfo;
		fertilize(id, time, type, amount);
	};

	render() {

		const {name, id, interval, lastTime, amount, type} = this.props.data;


		return (
			<div className="row plant">
				<div className="col-xs-8">
					<h4>{name}</h4>
					<ul>
						<li>Last amount: <strong>{amount}</strong> spoon</li>
						<li>Type: <strong>{type}</strong></li>
						<li>Interval: {interval}</li>
					</ul>
					<div>
						<button onClick={this.fertilize} className="btn btn-default">Fertilize</button>
					</div>
				</div>
				<div className="col-xs-4">
					<h4>&nbsp;</h4>
					<p><strong>3</strong> days</p>
				</div>
			</div>
		)
	}
}