import React from "react";

import isotypeWhite from "@icons/isotype-white.svg";
import "@styles/components/_loading.scss";

function Loading() {
	return(
			<div className="loading"> 
				<img src={isotypeWhite} alt=" imagen virus Alaisa" />
			</div>
	);
}

export { Loading };