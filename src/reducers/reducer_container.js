import * as containerTypes from '../action_creators/creator_container';

const INITIAL_STATE = {
    puzzle: 1,
    loading: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
        case containerTypes.START_LOADING:
            return {
                ...state,
                loading: true
            };
        case containerTypes.STOP_LOADING:
            return {
                ...state,
                loading: false
            };
        case containerTypes.FAILURE:
            return {
                ...state,
                ...action.data,
                failure: true,
                success: false,
            };
        case containerTypes.SUCCESS:
            return {
                ...state,
                ...action.data,
                failure: false,
                success: true,
            };
        case containerTypes.CHANGE_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.data
            };
        // case containerTypes.NEXT_PUZZLE:
        //     return {
        //         ...state,
        //         success: false,
        //         failure: false,
        //         puzzle: state.puzzle + 1,
        //         response: ''
        //     };
		default:
			return state;
	};
};