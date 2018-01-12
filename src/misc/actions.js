export const FERTILIZE = "FERTILIZE";
export const ADD_PLANT = "ADD_PLANT";


export const fertilize = (id, time, type, amount) => ({
	type: FERTILIZE,
	data: {id, time, type, amount}
});