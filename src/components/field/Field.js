import React from 'react';

const Field = props => {
    const { success, failure, inputValue, changeHandler, disabled } = props;
    let className = "input "
    success ? className = 'input input--success' : '';
    failure ? className = 'input input--failure' : '';

    return (
        <input className={className} value={inputValue} onChange={changeHandler}  disabled={disabled}/> 
    );  
};

export default Field;