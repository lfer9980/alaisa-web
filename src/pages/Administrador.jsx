import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";

function Administrador() {
	useDocumentTitle("administrador")
	
	return(
		<>
			<Content>
				<div className="title-h2">
					<h2>
						Administrador
					</h2>
				</div>
			</Content>
		</>
	);
}

export { Administrador };