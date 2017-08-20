import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../selectors'

import Field from '../field/Field';
import Button from '../button/Button';
import Loader from '../loader/Loader';
import Response from '../response/Response';

import { submitPuzzle, stopLoading, startLoading, answerFailed, answerSucceeded, changeValue, nextPuzzle} from '../../actions/actions_container';

class Answer extends Component {
    constructor(props) {
        super(props);
    }

    updateInputValue(event) {
        this.props.changeValue(event.target.value)
    }

    postAnswer(event) {
        event.preventDefault();
        this.props.startLoading();
        submitPuzzle(this.props.inputValue, this.props.puzzle, this.props.route)
        .then(response => {
            this.props.answerSucceeded({
                response: response.data.message,
                solution: response.data.solution
            })
            this.props.stopLoading();
        }).catch(error => {
            this.props.answerFailed({
                response: error.response.data.message
            })
            this.props.stopLoading();
        });
    }

    render() {
        return (    
            <Loader loading={this.props.loading}>
                <div className="ch-answer">
                    <form>
                        <Field 
                            success={this.props.success}
                            failure={this.props.failure}
                            value={this.props.inputValue}
                            changeHandler={this.updateInputValue.bind(this)}
                            disabled={this.props.success}
                            />
                        <Button value="Solve!" submitHandler={this.postAnswer.bind(this)} disabled={this.props.success} />
                        <Response 
                            success={this.props.success}
                            failure={this.props.failure}>
                            {this.props.response}
                        </Response>
                    </form>
                </div>
                {this.props.success && <Button value="Go to next puzzle" link={this.props.nextLocation} />}
            </Loader>
        );
    }
};

const mapStateToProps = state => {
    return {
        loading: selectors.loading(state),
        success: selectors.success(state),
        failure: selectors.failure(state),
        puzzle: selectors.getPuzzle(state),
        response: selectors.response(state),
        inputValue: selectors.inputValue(state),
    };
};

Answer = connect(mapStateToProps,{
    nextPuzzle,
    stopLoading,
    changeValue,
    startLoading,
    answerFailed,
	submitPuzzle,
    answerSucceeded,
})(Answer);

export default Answer;