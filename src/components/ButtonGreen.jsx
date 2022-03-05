import React from "react";
import { Link } from "react-router-dom";

function ButtonGreen({ texto, link, animation }) {
	return(
		<div className={`button--green ${animation}`}>
			<Link to={`/${link}`}>
					{texto}
					<i className="material-icons">
						arrow_forward
					</i>
			</Link>
		</div>
	);
}

export { ButtonGreen };