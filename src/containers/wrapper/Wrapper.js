import React from 'react';

const Wrapper = (props) => {
    return (
        <div className="ch">
            <div className="ch__wrapper">
                <p>Welcome to this puzzle.</p>

                <p>To get to the bottom of the riddle, you must solve 5 different puzzles.</p>

                <p>Each puzzle will yield a code word which should be entered below.</p>

                <p>A correct input will send you to the next puzzle.</p>

                <p>Good Luck!</p>
                {props.children}
            </div>
        </div>
    );
};

export default Wrapper;