import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../selectors'

import Alphanumerical from '../../components/keys/Alphanumerical';
import Specialkey from '../../components/keys/Specialkey';

const qwertyDvorakDictionary = {
    "Q": "Å",
    "W": ";",
    "E": ":",
    "R": "P",
    "T": "Y",
    "Y": "F",
    "U": "G",
    "I": "C",
    "O": "R",
    "P": "L",
    "Å": "*",
    "A": "A",
    "S": "O",
    "D": "E",
    "F": "U",
    "G": "I",
    "H": "D",
    "J": "H",
    "K": "T",
    "L": "N",
    "Ø": "S",
    "Æ": "-",
    "Z": "Æ",
    "X": "Q",
    "C": "J",
    "V": "K",
    "B": "X",
    "N": "B",
    "M": "M",
    ",": "W",
    ".": "V",
    "-": "Z",
}

class Keyboard extends Component {
    constructor(props) {
        super(props);
    }

    clickHandler(event, target) {
        event.preventDefault();
        const value = event.target.value;
        console.log(qwertyDvorakDictionary[value] || value);
        var evt = document.createEvent("CustomEvent");

        if (value === "K" || value === "E" || value === "Y") {
            evt.initCustomEvent("correctKey", true, true, {correctButton: value});
            document.dispatchEvent(evt)
        }else {
            evt.initCustomEvent("incorrectKey", true, true, {clickedButton: value});
            document.dispatchEvent(evt)
        }
    }

    render() {
        return (    
            <div className="ch-keyboard">
                <div className="ch-keyboard__row">
                    <Alphanumerical displayKey={"Esc"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"1"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"2"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"3"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"4"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"5"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"6"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"7"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"8"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"9"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"0"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"+"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"\\"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Specialkey displayKey={"Backspace"} onClickHandler={this.clickHandler.bind(this)} keyWidth="112px"/>
                </div>

                <div className="ch-keyboard__row">
                    <Specialkey displayKey={"Tab"} onClickHandler={this.clickHandler.bind(this)} keyWidth="85px"/>
                    <Alphanumerical displayKey={"Q"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"W"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"E"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"R"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"T"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"Y"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"U"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"I"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"O"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"P"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"Å"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"^"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Specialkey displayKey={" "} onClickHandler={this.clickHandler.bind(this)} keyWidth="82px"/>
                </div>

                <div className="ch-keyboard__row">
                    <Specialkey displayKey={"Caps Lock"} onClickHandler={this.clickHandler.bind(this)} keyWidth="100px"/>
                    <Alphanumerical displayKey={"A"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"S"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"D"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"F"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"G"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"H"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"J"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"K"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"L"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"Ø"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"Æ"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Specialkey displayKey={"Enter"} onClickHandler={this.clickHandler.bind(this)} keyWidth="128px"/>
                </div>

                <div className="ch-keyboard__row">
                    <Specialkey displayKey={"Shift"} onClickHandler={this.clickHandler.bind(this)} keyWidth="133px"/>
                    <Alphanumerical displayKey={"<"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"Z"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"X"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"C"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"V"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"B"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"N"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"M"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={","} onClickHandler={this.clickHandler.bind(this)}/>    
                    <Alphanumerical displayKey={"."} onClickHandler={this.clickHandler.bind(this)}/>
                    <Alphanumerical displayKey={"-"} onClickHandler={this.clickHandler.bind(this)}/>
                    <Specialkey displayKey={"Shift"} onClickHandler={this.clickHandler.bind(this)} keyWidth="95px"/>
                </div>

                <div className="ch-keyboard__row">
                    <Specialkey displayKey={"Ctrl"} onClickHandler={this.clickHandler.bind(this)} keyWidth="85px"/>
                    <Specialkey displayKey={"Alt"} onClickHandler={this.clickHandler.bind(this)} keyWidth="95px"/>
                    <Alphanumerical displayKey={""} onClickHandler={this.clickHandler.bind(this)} keyWidth="450px"/>
                    <Specialkey displayKey={"Alt Gr"} onClickHandler={this.clickHandler.bind(this)} keyWidth="85px"/>
                    <Specialkey displayKey={"fn"} onClickHandler={this.clickHandler.bind(this)} keyWidth="75px"/>
                    <Specialkey displayKey={"Ctrl"} onClickHandler={this.clickHandler.bind(this)} keyWidth="85px"/>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
    };
};

Keyboard = connect(mapStateToProps,{
})(Keyboard);

export default Keyboard;