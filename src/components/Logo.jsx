import React from "react";

import "@styles/components/logos.scss";

function Logo({ type }) {
	return(
		<div className={`logo logo__${type}`} />
	);
}

export { Logo };