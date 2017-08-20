import React from 'react';

const Wrapper = (props) => {
    return (
        <div className="ch">
            <div className="ch__wrapper">
                {props.children}
            </div>
        </div>
    );
};

export default Wrapper;