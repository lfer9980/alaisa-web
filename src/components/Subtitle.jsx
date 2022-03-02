import React from "react";

function Subtitle({children, type}) {
	return (
		<div className={`subtitle subtitle--${type}`}>
			{children}
		</div>
	);
}

export { Subtitle };