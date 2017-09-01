import React from 'react';

const Specialkey = props => {
    const { onClickHandler, displayKey, keyWidth } = props;

    var style = {
        width: keyWidth,
    };

    return (
        <input type="button" style={style} className="ch-keyboard__key ch-keyboard__key--special " onClick={onClickHandler} value={displayKey} />
    );  
};

export default Specialkey;