import { DATA_FAIL, DATA_LOADING, DATA_SUCCESS } from '../Action/actionType';

const initialState = {
	loading: false,
	error: null,
	message: [],
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
