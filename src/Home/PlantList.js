import React from "react";
import Plant from "./Plant";
import {connect} from "react-redux";
import * as Actions from "../misc/actions";
import sortBy from "sort-by";

class PlantList extends React.Component {
	render() {

		const fertilize = this.props.fertilize;
		const fertilizerInfo = this.props.fertilizerInfo;

		// Transform data to add 'remainingDays'
		const now = Date.now();
		const oneDayTime = 8.64e+7;

		const plantData = this.props.plants.map(item => {
			const {interval, lastTime} = item;
			const remainingDays = Math.ceil((lastTime + interval * oneDayTime - now) / oneDayTime);

			return {
				...item,
				remainingDays
			}
		});

		// Sort plants
		plantData.sort(sortBy('remainingDays'));

		// Map array to components
		const plantNodes = plantData.map((plant) => {
			return <Plant fertilize={fertilize}
						  key={plant.id}
						  fertilizerInfo={fertilizerInfo}
						  data={plant}/>
		});

		return (
			<div className="home__plant-list">
				{plantNodes}
			</div>
		)
	}
	
}

const mapStateToProps = state => ({
	plants: state.plants,
	fertilizerInfo: state.fertilizerInfo
});
const mapDispatchToProps = dispatch => ({
	fertilize: (id, time, type, amount) => {
		dispatch(Actions.fertilize(id, time, type, amount))
	}
});
export default connect(mapStateToProps, mapDispatchToProps)(PlantList)