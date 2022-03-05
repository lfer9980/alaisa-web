import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "@context/AppContext";

function Breadcrumbs({ url, children }) {
	const {
		language
	} = useContext(AppContext)

	return (
		<div className="breadcrumbs">
			<nav className="breadcrumbs__nav">
				<Link to="/">
					<span className="bread">
						{language ? "Home": "Inicio"}
					</span>
				</Link>
				{
					url &&
					<Link to={`/${url}`}>
						<span className="bread">
							{url}
						</span>
					</Link>
				}
				<span className="bread">
					{children}
				</span>			
			</nav>
		</div>
	);
}

export { Breadcrumbs }; 