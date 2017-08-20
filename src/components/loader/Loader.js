import React from 'react';

const Loader = (props) => {
	const { loading } = props;
	const wrapperClass = loading ? " ch-loader__wrapper" : "";

	return (
		<div className={wrapperClass}>
			<div className={loading ? "ch-loader__overlay" : "ch-loader__overlay--loaded"}>
				{props.children}
        	</div>
        	{loading && <div className="ch-loader" />}
    	</div>
	);
};

export default Loader;