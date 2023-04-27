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
} from '../Action/actionType';

const initialState = {
	loading: false,
	error: null,
	message: [],
};
const initialStates = {
	loading: false,
	error: null,
	message: {},
};

export const getDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case DATA_LOADING:
			return {
				loading: true,
				error: null,
				message: [],
			};
		case DATA_FAIL:
			return {
				loading: false,
				error: action.payload,
				message: [],
			};
		case DATA_SUCCESS:
			return {
				loading: false,
				error: null,
				message: action.payload,
			};

		default:
			return state;
	}
};

export const createDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_LOADING:
			return {
				loading: true,
				error: null,
				message: [],
			};
		case CREATE_FAIL:
			return {
				loading: false,
				error: action.payload,
				message: [],
			};
		case CREATE_SUCCESS:
			return {
				loading: false,
				error: null,
				message: action.payload,
			};

		default:
			return state;
	}
};

export const getAllDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_DATA_LOADING:
			return {
				loading: true,
				error: null,
				message: [],
			};
		case GET_DATA_FAIL:
			return {
				loading: false,
				error: action.payload,
				message: [],
			};
		case GET_DATA_SUCCESS:
			return {
				loading: false,
				error: null,
				message: action.payload,
			};

		default:
			return state;
	}
};

export const getDataByIdReducer = (state = initialStates, action) => {
	switch (action.type) {
		case GET_DATA_BYID_LOADING:
			return {
				loading: true,
				error: null,
				message: {},
			};
		case GET_DATA_BYID_FAIL:
			return {
				loading: false,
				error: action.payload,
				message: {},
			};
		case GET_DATA_BYID_SUCCESS:
			return {
				loading: false,
				error: null,
				message: action.payload,
			};

		default:
			return state;
	}
};
