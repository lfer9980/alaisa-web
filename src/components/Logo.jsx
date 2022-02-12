import React from "react";

function Logo({ type }) {
	return(
		<div className={`logo logo__${type}`} />
	);
}

export { Logo };