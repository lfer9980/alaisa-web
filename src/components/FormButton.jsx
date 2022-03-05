import React from "react";

function FormButton({ name, value }) {
	return(
		<>
			<input 
				className="form__button" 
				type="submit" 
				id={name}
				name={name}
				value={value}	
			/>
		</>
	);
}

export { FormButton }; 