import * as containerTypes from '../action_creators/creator_container';
import * as api from '../api/puzzleapi.js';

export const submitPuzzle = (value, puzzle, route) => {
    return api.postPuzzle(value, route)
};

export const changeValue = (data) => {
    return {
        type: containerTypes.CHANGE_INPUT_VALUE,
        data
    };
};

export const startLoading = () => {
    return {
        type: containerTypes.START_LOADING
    };
};

export const stopLoading = () => {
    return {
        type: containerTypes.STOP_LOADING
    };
};

export const answerFailed = (data) => {
    return {
        type: containerTypes.FAILURE,
        data
    };
};

export const answerSucceeded = (data) => {
    return {
        type: containerTypes.SUCCESS,
        data
    };
};
export const nextPuzzle = (data) => {
    return {
        type: containerTypes.NEXT_PUZZLE
    };
};