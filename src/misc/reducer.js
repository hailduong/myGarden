const initialState = {
	fertilizerInfo: {
		type: "10-30-20",
		amount: "0.5"
	},
	plants: [
		{
			id: 'Chuong Vang',
			name: 'Chuong Vang',
			interval: 4,
			fertilizingHistory: [{
				lastTime: 1514048400000,
				type: '12-12-17',
				amount: 1
			}],

		}]
};
import * as Actions from "./actions";

export default function plantReducer(state = initialState, action) {
	switch (action.type) {

		case Actions.FERTILIZE: {
			const {id, time, type, amount} = action.data;

			const newPlantState = state.plants.map((item) => {
				if (item.id === id) {
					console.log('Fertilized!', item);
					const newHistory = {
						amount: amount,
						lastTime: time,
						type: type
					};

					let newFertilizingHistory = JSON.parse(JSON.stringify(item.fertilizingHistory));
					newFertilizingHistory.push(newHistory);

					return {
						...item,
						fertilizingHistory: newFertilizingHistory
					};
				}

				return item
			});


			return Object.assign({}, state, {plants: newPlantState})
		}

		case Actions.SET_FERTILIZER_INFO: {

			const fertilizerInfo = {
				type: action.data.type,
				amount: action.data.amount
			};


			console.log('Set fertilizer info!', fertilizerInfo);
			return {
				...state,
				fertilizerInfo
			}
		}

		case Actions.GET_BACKUP_DATA: {
			return action.data
		}

		case Actions.ADD_PLANT: {

			const data = action.data;
			const newPlant = {
				id: data.name,
				name: data.name,
				interval: data.interval,
				fertilizingHistory: [
					{
						lastTime: Date.now(),
						type: '',
						amount: 0,
					}
				]
			};


			const newState = {
				...state,
				plants: [
					...state.plants,
					newPlant
				]
			};

			console.log('- Plant added:', newPlant);

			return newState
		}

		case Actions.EDIT_PLANT: {

			const {id, name, interval} = action.data;
			const plantIndex = state.plants.findIndex(item => item.id === id);

			const newState = JSON.parse(JSON.stringify(state));

			newState.plants[plantIndex].name = name;
			newState.plants[plantIndex].interval = interval;

			return newState;
		}

		default: {
			return state
		}
	}
}