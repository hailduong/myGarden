import React from "react";
import Plant from "./Plant";
import {connect} from "react-redux";
import * as Actions from "../misc/actions";

class PlantList extends React.Component {
	render() {

		const fertilize = this.props.fertilize;

		const plantNodes = this.props.plants.map((plant) => {
			return <Plant fertilize={fertilize} key={plant.id} data={plant}/>
		});

		return (
			<div className="home__plant-list">
				{plantNodes}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	plants: state.plants
});
const mapDispatchToProps = dispatch => ({
	fertilize: (id, time, type, amount) => {
		dispatch(Actions.fertilize(id, time, type, amount))
	}
});
export default connect(mapStateToProps, mapDispatchToProps)(PlantList)