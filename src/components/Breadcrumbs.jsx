import React from "react";
import { Link } from "react-router-dom";

function Breadcrumbs({url, section}) {
	return (
		<div className="breadcrumbs">
			<nav className="breadcrumbs__nav">
				<Link to="/">
					<span>Inicio</span>
				</Link>
				<Link to={`/${url}`}>
					<span>{url}</span>
				</Link>
				<span>
					{section}
				</span>			
			</nav>
		</div>
	);
}

export { Breadcrumbs }; 