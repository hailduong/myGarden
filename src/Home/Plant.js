import React from "react";
import {Button, Icon} from "react-onsenui";
import * as ons from "onsenui";

export default class Plant extends React.Component {

	fertilize = () => {
		const {fertilize} = this.props;
		const {id} = this.props.data;
		const time = Date.now();
		const {type, amount} = this.props.fertilizerInfo;
		fertilize(id, time, type, amount);
		ons.notification.toast({message: 'Fertilized', timeout: 1000})
	};

	goToEditPlant = () => {
		const {id} = this.props.data;
		console.log('Edit this plant', id)
	};

	render() {

		if (!this.props.data) return null;

		const {name, interval} = this.props.data;
		const fertilizingHistory = this.props.data.fertilizingHistory;
		const {lastTime, amount, type} = fertilizingHistory[fertilizingHistory.length - 1];
		const now = Date.now();
		const oneDayTime = 8.64e+7;
		const remainingDays = Math.ceil((lastTime + interval * oneDayTime - now) / oneDayTime);

		return (
			<div className="row plant">
				<Icon icon="ion-edit" onClick={this.goToEditPlant}/>
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