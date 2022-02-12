import React from "react";



function ButtonAncla({ text, cssName, url }) {
	return(
		<div className={`button--${cssName}`}>
			<a href={`https://www.${url}/`}>
				{text}
				<i className="material-icons">
					arrow_forward
				</i>
			</a>
		</div>
	);
}

export { ButtonAncla };