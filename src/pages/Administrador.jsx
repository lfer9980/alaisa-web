import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { Title } from "@components/Title";
import { Breadcrumbs } from "@components/Breadcrumbs";

function Administrador() {
	useDocumentTitle("administrador")
	
	return(
		<>
			<Content type="margin">
				<Breadcrumbs>
					Iniciar sesión
				</Breadcrumbs>
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