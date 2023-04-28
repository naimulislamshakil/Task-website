import axios from 'axios';
import {
	CREATE_FAIL,
	CREATE_LOADING,
	CREATE_SUCCESS,
	DATA_FAIL,
	DATA_LOADING,
	DATA_SUCCESS,
	GET_DATA_BYID_FAIL,
	GET_DATA_BYID_LOADING,
	GET_DATA_BYID_SUCCESS,
	GET_DATA_FAIL,
	GET_DATA_LOADING,
	GET_DATA_SUCCESS,
	UPDATE_DATA_BYID_FAIL,
	UPDATE_DATA_BYID_LOADING,
	UPDATE_DATA_BYID_SUCCESS,
} from './actionType';

export const getDataAction = () => async (dispatch) => {
	try {
		dispatch({
			type: DATA_LOADING,
		});

		const res = await axios.get('https://test-backend-2-kappa.vercel.app/data');

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

		const res = await axios.post(
			'https://test-backend-bice.vercel.app/api/v1/selector',
			data
		);

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

		const res = await axios.get(
			'https://test-backend-bice.vercel.app/api/v1/getSelector'
		);

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

export const getDataByIdAction = (id) => async (dispatch) => {
	try {
		dispatch({
			type: GET_DATA_BYID_LOADING,
		});

		const res = await axios.get(
			`https://test-backend-bice.vercel.app/api/v1/getSelector/${id}`
		);

		dispatch({
			type: GET_DATA_BYID_SUCCESS,
			payload: res.data.data,
		});
	} catch (error) {
		dispatch({
			type: GET_DATA_BYID_FAIL,
			payload: error?.message,
		});
	}
};

export const updateDataByIdAction = (id, data) => async (dispatch) => {
	try {
		dispatch({
			type: UPDATE_DATA_BYID_LOADING,
		});

		const res = await axios.put(
			`https://test-backend-bice.vercel.app/api/v1/getSelector/${id}`,
			data
		);

		dispatch({
			type: UPDATE_DATA_BYID_SUCCESS,
			payload: res.data.data,
		});
	} catch (error) {
		dispatch({
			type: UPDATE_DATA_BYID_FAIL,
			payload: error?.message,
		});
	}
};
