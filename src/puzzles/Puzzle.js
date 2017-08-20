import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as selectors from '../selectors'

import PuzzleOne from './PuzzleOne';
import PuzzleTwo from './PuzzleTwo';
import PuzzleThree from './PuzzleThree';

class Puzzle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <PuzzleOne />;
    }
};

const mapStateToProps = state => {
    return {
        puzzle: selectors.getPuzzle(state),
    };
};

Puzzle = connect(mapStateToProps,{})(Puzzle);

export default Puzzle;