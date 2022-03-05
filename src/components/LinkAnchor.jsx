import React from "react";

function LinkAnchor({ children, href, type }) {
	return(
		<div className={`link link--${type}`}>
			<a className="link"	href={href}>
				{children}
			</a>
		</div>
	);
}

export { LinkAnchor };