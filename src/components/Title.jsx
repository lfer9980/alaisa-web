import React from "react";

/* logica para crear titulos en el landingPage */
const typeOfElement = (typeElement, textElement) => {
	if(typeElement==="main") {
		return React.createElement("h2", {}, textElement);
	}
	return React.createElement(typeElement, {}, textElement);
}	


function Title({ type , text }) {
	const element = typeOfElement(type, text)

	return(
		<div className={`title-${type}`} > 
			{element}
		</div>
	);
}

export { Title };
