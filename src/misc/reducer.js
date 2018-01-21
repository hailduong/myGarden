const initialState = {
	fertilizerInfo: {
		type: "10-30-20",
		amount: "0.5"
	},
	plants: [
		{
			id: 1,
			name: 'Dua Can Hong',
			lastTime: 1514048400000,
			type: '5-30-30',
			amount: 1,
			interval: 4
		},
		{
			id: 2,
			name: 'Dua Can Do',
			lastTime: 1514048400000,
			type: '5-30-30',
			amount: 1,
			interval: 6
		},
		{
			id: 3,
			name: 'Dua Can Tim',
			lastTime: 1514048400000,
			type: '5-30-30',
			amount: 1,
			interval: 8
		},
		{
			id: 4,
			name: 'Hong Thien Huong',
			lastTime: 1514048400000,
			type: '12-12-17',
			amount: 1,
			interval: 10
		},
		{
			id: 5,
			name: 'Chuong Vang',
			lastTime: 1514048400000,
			type: '12-12-17',
			amount: 1,
			interval: 4
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
					return {
						...item,
						lastTime: time,
						type, amount,
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
				lastTime: Date.now(),
				type: '',
				amount: 0,
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