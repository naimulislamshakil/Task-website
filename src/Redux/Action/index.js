import axios from 'axios';
import {
	CREATE_FAIL,
	CREATE_LOADING,
	CREATE_SUCCESS,
	DATA_FAIL,
	DATA_LOADING,
	DATA_SUCCESS,
	GET_DATA_FAIL,
	GET_DATA_LOADING,
	GET_DATA_SUCCESS,
} from './actionType';

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

export const createDataAction = (data) => async (dispatch) => {
	try {
		dispatch({
			type: CREATE_LOADING,
		});

		const res = await axios.post('http://localhost:5000/api/v1/selector', data);

		dispatch({
			type: CREATE_SUCCESS,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: CREATE_FAIL,
			payload: error?.message,
		});
	}
};

export const getAllDataAction = () => async (dispatch) => {
	try {
		dispatch({
			type: GET_DATA_LOADING,
		});

		const res = await axios.get('http://localhost:5000/api/v1/getSelector');

		dispatch({
			type: GET_DATA_SUCCESS,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: GET_DATA_FAIL,
			payload: error?.message,
		});
	}
};
