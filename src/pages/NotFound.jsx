import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";

import { Content } from "@containers/Content";
import { Title } from "@components/Title";
import { Logo } from "@components/Logo";

function NotFound() {
	useDocumentTitle(":( No encontrado")
	return (
		<>
			<Content type="margin">
				<Title type="h2">
					<h2>
						404
					</h2>
				</Title>	
				<section className="main no-background">
					<Title type="h3">
						<h3>
							<span>404 No Encontrado</span><br/> La URL solicitada no fue encontrada en el servidor. Si entro la URL manualmente, porfavor verifique que sea correcta e intentelo de nuevo.
						</h3>
					</Title>
					<Logo type="imagotype" />
				</section>
			</Content>
		</>
	);
}

export { NotFound };