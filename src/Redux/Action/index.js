import axios from 'axios';
import { DATA_FAIL, DATA_LOADING, DATA_SUCCESS } from './actionType';

export const getDataAction = () => async (dispatch) => {
	try {
		dispatch({
			type: DATA_LOADING,
		});

		const res = await axios.get('http://localhost:5001/data');

		dispatch({
			type: DATA_SUCCESS,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: DATA_FAIL,
			payload: error?.message,
		});
	}
};
