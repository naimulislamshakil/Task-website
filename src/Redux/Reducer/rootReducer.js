import { combineReducers } from 'redux';
import { getDataReducer } from '.';

const rootReducer = combineReducers({
	datas: getDataReducer,
});

export default rootReducer;
