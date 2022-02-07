import React from "react";
	

function Title({ type , children }) {
	return(
		<div className={`title-${type}`} > 
			{children}
		</div>
	);
}

export { Title };
