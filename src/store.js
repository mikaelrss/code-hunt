import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

/* eslint-disable no-underscore-dangle */

const development = process.env.NODE_ENV === 'development';
console.log(development)

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const configureStoreDev = () => {
	return createStore(
		rootReducer, 
		enhancers,
		applyMiddleware(thunk, reduxImmutableStateInvariant()) // DEV-ONLY: Spits out error if mutating state
	);
};

const configureStore = () => {
	return createStore(
		rootReducer, 
		applyMiddleware(thunk, reduxImmutableStateInvariant()) // DEV-ONLY: Spits out error if mutating state
	);
};

const store = development ? configureStoreDev() : configureStore();

if(module.hot && development){
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;