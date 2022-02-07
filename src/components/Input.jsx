import React from "react";

import "@styles/components/inputs.scss";

function Input({ name, text, placeholder }) {
	return (
		<>
			<label 
				className="input" 
				htmlFor={name}>
				<span className="input__title">
					{text}
				</span>
				<input 
					className="input__select" 
					type="text" 
					id={name} 
					name={name} 
					placeholder={placeholder}
					required="required"
				/>
			</label>
		</>
	);
}

export { Input }; 