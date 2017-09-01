import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as selectors from '../selectors'

import Answer from '../container_components/answer/Answer';
import Keyboard from '../container_components/keyboard/Keyboard';

class PuzzleOne extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ch-question__wrapper">
                <div className="ch-question__wrapper--width">
                    <p>Welcome to this puzzle.</p>

                    <p>To get to the bottom of the riddle, you must solve 5 different puzzles.</p>

                    <p>Each puzzle will yield a code word which should be entered below.</p>

                    <p>A correct input will send you to the next puzzle.</p>

                    <p>Good Luck!</p>
                    <Answer nextLocation={this.props.solution} route='one'/>
                </div>
                <Keyboard />
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        solution: selectors.solution(state),
    };
};

PuzzleOne = connect(mapStateToProps,{})(PuzzleOne);

export default PuzzleOne;