import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";

import { Title } from "@components/Title";
import { Content } from "@containers/Content";

function Administrador({ adminTexto }) {
	useDocumentTitle("administrador")
	
	return(
		<>
			<Content type="margin">
				<Title type="h2">
					<h2>
						Administrador
					</h2>
				</Title>
			</Content>
		</>
	);
}

export { Administrador };