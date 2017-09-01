import React, { Component } from 'react';

class Alphanumerical extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            correct: false,
            incorrect: false,
        }
        document.addEventListener("correctKey", (event) => {
            if(event.detail.correctButton === this.props.displayKey) {
                this.setState({
                    correct: true,
                    incorrect: false,
                })
                setTimeout(() => {
                    this.setState({
                        correct: false,
                    })
                }, 900) 
            }
        })
    
        document.addEventListener("incorrectKey", (event) => {
            if(event.detail.clickedButton === this.props.displayKey) {
                this.setState({
                    correct: false,
                    incorrect: true,
                })
                setTimeout(() => {
                    this.setState({
                        incorrect: false,
                    })
                }, 900) 
            }
        })
    }    
    
    render() {
        let className = "ch-keyboard__key ch-keyboard__key--alphanum "

        if(this.state.correct) {
            className += "ch-keyboard__key--correct ";
        }
        if(this.state.incorrect) {
            className += "ch-keyboard__key--incorrect ";
        }
        let style = {
            width: this.props.keyWidth || '',
        };

        return (
            <input type="button" style={style}className={className} onClick={this.props.onClickHandler} value={this.props.displayKey} />
        ); 
    }
}

export default Alphanumerical;