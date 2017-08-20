import React from 'react';

const Field = props => {
    const { success, failure } = props;
    let className = "input "
    success ? className += 'input--success' : '';
    failure ? className += 'input--failure' : '';

    return (
        <input className={className}  /> 
    );  
};

export default Field;