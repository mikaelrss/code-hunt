import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Wrapper from './containers/wrapper/Wrapper'
import Answer from './components/answer/Answer'
import Puzzle from './puzzles/Puzzle'

import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <Wrapper> 
            <Puzzle />
        </Wrapper>
    </Provider>,
    
    document.getElementById('app')
);

const development = process.env.NODE_ENV === 'development';

if (development) {
    module.hot.accept();
}
