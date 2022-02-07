import React from "react";
import { Link } from "react-router-dom";

import "@styles/components/breadcrumbs.scss";

function Breadcrumbs({url, section }) {
	return (
		<div className="breadcrumbs">
			<nav className="breadcrumbs__nav">
				<Link to="/">
					<span className="bread">
						Inicio
					</span>
				</Link>
				<Link to={`/${url}`}>
					<span className="bread">
						{url}
					</span>
				</Link>
				<span className="bread">
					{section}
				</span>			
			</nav>
		</div>
	);
}

export { Breadcrumbs }; 