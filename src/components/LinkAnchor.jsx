import React from "react";

import "@styles/components/links.scss";


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