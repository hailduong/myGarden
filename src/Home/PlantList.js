import React from "react";
import Plant from "./Plant";
import {connect} from "react-redux";
import * as Actions from "../misc/actions";
import sortBy from "sort-by";
import {Card} from "react-onsenui";

class PlantList extends React.Component {
	render() {

		const fertilize = this.props.fertilize;
		const fertilizerInfo = this.props.fertilizerInfo;

		// Transform data to add 'remainingDays'
		const now = Date.now();
		const oneDayTime = 8.64e+7;

		const plantData = this.props.plants.map(item => {

			const {interval} = item;
			const fertilizingHistory = item.fertilizingHistory;
			const lastItemIndex = fertilizingHistory.length - 1;
			const {lastTime} = fertilizingHistory[lastItemIndex];
			const remainingDays = Math.ceil((lastTime + interval * oneDayTime - now) / oneDayTime);

			return {
				...item,
				remainingDays
			}
		}).filter(item => {
			// TODO: Hack for now, remove dead plants
			const deadPlants = ["Dừa Cạn Tím (Nhỏ)", "Dừa Cạn Hồng"];
			return deadPlants.indexOf(item.id) === -1;

		});

		// Sort plants
		plantData.sort(sortBy('remainingDays'));

		// Map array to components
		const plantNodes = plantData.map((plant) => {
			return (
				<Card key={plant.id}>
					<Plant fertilize={fertilize}
						   fertilizerInfo={fertilizerInfo}
						   data={plant}/>
				</Card>
			)
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