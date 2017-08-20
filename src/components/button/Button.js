import React from 'react';

const Button = props => {
    const {link, disabled} = props;
    
    if( link ) {
        return (
            <a href={link}>
                <div className="button-anchor " >
                    {props.value}
                </div>
            </a> 
        )
    }

    return (
        <button className="button" onClick={props.submitHandler} disabled={disabled}>{props.value}</button> 
    );  
};

export default Button;