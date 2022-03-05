import React from "react";

function Form({ children }) {
	return(
		<section className="main-form">
			{children}
		</section>
	);
}

export { Form };