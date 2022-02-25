import React from "react";
import { Link } from "react-router-dom";



function ButtonGreen({ text, link, animation }) {
	return(
		<div className={`button--green ${animation}`}>
			<Link to={`/${link}`}>
					{text}
					<i className="material-icons">
						arrow_forward
					</i>
			</Link>
		</div>
	);
}

export { ButtonGreen };