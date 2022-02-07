import React from "react";


function Paragraph({children, type}) {
	return (
		<div className={`paragraph paragraph--${type}`}>
			<p>
				{children}
			</p>
		</div>
	);
}

export { Paragraph };