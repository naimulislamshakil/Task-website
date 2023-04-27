import { combineReducers } from 'redux';
import {
	createDataReducer,
	getAllDataReducer,
	getDataByIdReducer,
	getDataReducer,
} from '.';

const rootReducer = combineReducers({
	datas: getDataReducer,
	create: createDataReducer,
	allData: getAllDataReducer,
	getSingleData: getDataByIdReducer,
});

export default rootReducer;
