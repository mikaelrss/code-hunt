import { combineReducers } from 'redux';
import container from './reducer_container';


const reducers = {
	container
};

const rootReducer = combineReducers(reducers);

export default rootReducer;