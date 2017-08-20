import React, { Component } from 'react';
import Field from '../field/Field';
import Button from '../button/Button';
import Loader from '../loader/Loader';
import Response from '../response/Response';

class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
			loading: false,
            response: '',
            success: false,
            failure: false
		};
    }

    postAnswer(event) {
        event.preventDefault();
        this.setState({
			loading: true
		});

        setTimeout(() => {
            this.setState({
                loading: false,
                response: "You Managed To solve It! ",
                success: true
            });
        }, 1300);
    }

    render() {
        return (
            <Loader loading={this.state.loading}>
                <div className="ch-answer">
                    <Field 
                        success={this.state.success}
                        failure={this.state.failure}/>
                    <Button value="Solve!" submitHandler={this.postAnswer.bind(this)} />
                    <Response 
                        success={this.state.success}
                        failure={this.state.failure}>
                        {this.state.response}
                    </Response>
                </div>
            </Loader>
        );
    }
};

export default Answer;