import React from "react";

import "@styles/components/forms.scss";

function FormButton({name, defaultValue}) {
	return(
		<>
			<input 
				className="form-button" 
				type="submit" 
				id={name}
				name={name}
				defaultValue={defaultValue}	
			/>
		</>
	);
}

export { FormButton }; 