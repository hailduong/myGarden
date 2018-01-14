export const FERTILIZE = "FERTILIZE";
export const GET_BACKUP_DATA = "GET_ONLINE_DATA";
export const BACKUP_DATA = "BACKUP_DATA";
export const ADD_PLANT = "ADD_PLANT";
export const EDIT_PLANT = "EDIT_PLANT";
export const SET_FERTILIZER_INFO = "SET_FERTILIZER_INFO";

export const fertilize = (id, time, type, amount) => ({
	type: FERTILIZE,
	data: {id, time, type, amount}
});

export const setFertilizerInfo = (type, amount) => ({
	type: SET_FERTILIZER_INFO,
	data: {type, amount}
});

export const getBackupData = (data) => ({
	type: GET_BACKUP_DATA,
	data: data
});

export const addPlant = ({name, interval}) => ({
	type: ADD_PLANT,
	data: {name, interval}
});