import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as selectors from '../selectors'

import Answer from '../container_components/answer/Answer';

class PuzzleTwo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ch-puzzle">
                <p> To solve this puzzle you need to get creative! </p>
                <Answer route='two'/>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {

    };
};

PuzzleTwo = connect(mapStateToProps,{})(PuzzleTwo);

export default PuzzleTwo;