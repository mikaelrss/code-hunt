import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as selectors from '../selectors'

import Answer from '../components/answer/Answer';

class PuzzleThree extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ch-puzzle">
                <p> You are close to the finish line! :D </p>
                <p> sss</p>
                <Answer route='three'/>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {

    };
};

PuzzleThree = connect(mapStateToProps,{})(PuzzleThree);

export default PuzzleThree;