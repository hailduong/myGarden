import React from "react";
import {Button, Icon} from "react-onsenui";


export default class Plant extends React.Component {

	fertilize = () => {
		const {fertilize} = this.props;
		const {id} = this.props.data;
		const time = Date.now();
		const {type, amount} = this.props.fertilizerInfo;
		fertilize(id, time, type, amount);
	};

	render() {

		const {name, interval, lastTime, amount, type} = this.props.data;
		const now = Date.now();
		const oneDayTime = 8.64e+7;
		const remainingDays = Math.ceil((lastTime + interval * oneDayTime - now) / oneDayTime);

		return (
			<div className="row plant">
				<div className="col-xs-9">
					<h3><Icon icon="ion-leaf"/>{name}</h3>
					<ul>
						<li>Last amount: <strong>{amount}</strong> spoon</li>
						<li>Type: <strong>{type}</strong></li>
						<li>Interval: {interval}</li>
					</ul>
				</div>
				<div className="col-xs-3">
					<h4>&nbsp;</h4>
					<p><strong>{remainingDays}</strong> days</p>
				</div>
				<div className="col-xs-12">
					<Button modifier="outline" className="btn-fertilize btn-sm" onClick={this.fertilize}>Fertilize</Button>
				</div>
			</div>
		)
	}
}