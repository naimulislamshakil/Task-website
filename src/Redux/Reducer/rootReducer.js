import { combineReducers } from 'redux';
import {
	createDataReducer,
	getAllDataReducer,
	getDataByIdReducer,
	getDataReducer,
	updateDataByIdReducer,
} from '.';

const rootReducer = combineReducers({
	datas: getDataReducer,
	create: createDataReducer,
	allData: getAllDataReducer,
	getSingleData: getDataByIdReducer,
	updateData: updateDataByIdReducer,
});

export default rootReducer;
