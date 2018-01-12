const initialState = {
	fertilizerInfo: {
		currentType: "10-30-20",
		currentAmount: "0.5"
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

			const newPlantState = state.plants.forEach((item) => {
				if (item.id === id) {
					return {
						...item,
						lastTime: time,
						type, amount,
					}
				}

				return item
			});

			return Object.assign({}, state, {plants: newPlantState})
		}

		default: {
			return state
		}
	}
}