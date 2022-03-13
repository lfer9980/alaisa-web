import React from "react";

function Input({ id, question, type }) {
	return (
		<>
			<label 
				className="input" 
				htmlFor={id}>
				<span className="input__title">
					{question}
				</span>
				<input 
					className="input__select" 
					type={type} 
					id={id} 
					name={id} 
					required="required"
					min="0"
				/>
			</label>
		</>
	);
}

export { Input }; 