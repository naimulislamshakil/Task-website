import { combineReducers } from 'redux';
import { createDataReducer, getDataReducer } from '.';

const rootReducer = combineReducers({
	datas: getDataReducer,
	create: createDataReducer,
});

export default rootReducer;
