import React from "react";




function LinkAnchor({children, href}) {
	return(
		<div className="link">
			<a className="link"	href={href}>
				{children}
			</a>
		</div>
	);
}

export { LinkAnchor };