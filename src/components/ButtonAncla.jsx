import React from "react";

function ButtonAncla({ texto, cssName, url }) {
	return(
		<div className={`button--${cssName}`}>
			<a href={`https://www.${url}/`}>
				{texto}
				<i className="material-icons">
					arrow_forward
				</i>
			</a>
		</div>
	);
}

export { ButtonAncla };