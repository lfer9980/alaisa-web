import React from "react";

function InputCheck({ children }) {
	return (
		<>
			<label className="input__check" htmlFor="aviso">
				<input type="checkbox" name="aviso" id="aviso" defaultValue="y" required />
				<span htmlFor="aviso">
					{children}
				</span>
			</label>
		</>
	);
}

export { InputCheck };