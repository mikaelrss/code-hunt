import React from 'react';
import ReactDOM from 'react-dom';

import Wrapper from './containers/wrapper/Wrapper'
import Answer from './components/answer/Answer'

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
    <Wrapper> 
        <Answer />
    </Wrapper>,
    document.getElementById('app')
);

module.hot.accept();