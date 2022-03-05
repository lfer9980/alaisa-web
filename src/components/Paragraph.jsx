import React from "react";

function Paragraph({ children, type }) {
	return (
		<div className={`paragraph paragraph--${type}`}>
			{children}
		</div>
	);
}

export { Paragraph };