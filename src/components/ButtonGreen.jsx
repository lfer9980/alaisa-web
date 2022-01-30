import React from "react";

function ButtonGreen({ text }) {
	return(
		<div className="button--green">
			<a>{text}</a>
			<i className="material-icons">
			arrow_forward
			</i>
		</div>
	);
}

export { ButtonGreen	};