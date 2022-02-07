import React from "react";
import { Content } from "@containers/Content";

import "@styles/containers/modalProgress.scss";

function ModalProgress() {
	return(
		<Content>
			<figure className="logo"> 
				<img className="logo--isotype"/>
			</figure>
		</Content>
	);
}

export { ModalProgress };