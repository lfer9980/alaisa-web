import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { Title } from "@components/Title";


function Administrador() {
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