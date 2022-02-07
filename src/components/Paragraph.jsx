import React from "react";

import "@styles/components/paragraphs.scss";

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