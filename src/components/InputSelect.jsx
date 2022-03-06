import React from "react";

function InputSelect({ question, id, options }) {
	return (
		<label className="input" htmlFor={id} >
			<span className="input__title">
				{question}
			</span>
			<select
				className="input__select__place"
				name={id}
				id={id}
				>
				<option value={1}>
					{options[0]}
				</option>
				<option value={0} defaultValue>
					{options[1]}
				</option>
			</select>
		</label>
	);
}

export { InputSelect }; 