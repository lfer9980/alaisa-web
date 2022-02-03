import React from "react";

function Logo({ type, color }) {
	return(
		<div className={`logo__${type} logo--${color}`} />
	);
}

export { Logo };