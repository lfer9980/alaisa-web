import React from "react";

function InputSelect({ name, text, options }) {
	return (
		<>
			<label
				className="input"
				htmlFor={name}
				>
					<span className="input__title">
						{text}
					</span>
				<select
					className="input__select__place"
					name={name}
					id={name}
				>
					{options.map( (item)=> (
						<option 
							value={item.value}
							key={item.value}>
							{item.description}
						</option>
					))}	
				</select>
			</label>
		</>
	);
}

export { InputSelect }; 