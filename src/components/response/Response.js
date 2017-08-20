import React from 'react';

const Response = props => {
    const { success, failure } = props;

    let className = 'ch-response ';
    success ? className += 'ch-response--success ' : '';
    failure ? className += 'ch-response--failure ' : '';

    return (
        <div className={className}>
            {props.children}
        </div>
    );  
};

export default Response;