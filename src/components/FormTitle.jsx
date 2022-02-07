import React from "react";

import "@styles/components/forms.scss";

function FormTitle({title}) {
	return(
		<>
			<h4 className="form-title">{title}</h4>
		</>
	);
}

export { FormTitle }; 