import React, {useContext} from "react";
import {AppContext} from "@context/AppContext";

function Title({ type , children }) {
/* 	const {
		targetRef
	} = useContext(AppContext); */

	return(
		<div className={`title-${type}`} > 
			{children}
		</div>
	);
}

export { Title };
