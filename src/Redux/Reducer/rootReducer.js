import { combineReducers } from 'redux';
import { createDataReducer, getAllDataReducer, getDataReducer } from '.';

const rootReducer = combineReducers({
	datas: getDataReducer,
	create: createDataReducer,
	allData: getAllDataReducer,
});

export default rootReducer;
