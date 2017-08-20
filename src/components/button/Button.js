import React from 'react';

const Button = props => {
    return (
        <button className="button" onClick={props.submitHandler}>{props.value}</button> 
    );  
};

export default Button;