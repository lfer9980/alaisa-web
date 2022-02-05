import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { Title } from "@components/Title";
import "@styles/Administrador.scss";

function Administrador() {
	useDocumentTitle("administrador")
	
	return(
		<>
			<Content>
				<Title type="h2" text="Administrador" />
			</Content>
		</>
	);
}

export { Administrador };