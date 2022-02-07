import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { Title } from "@components/Title";
import { Footer } from "@components/Footer";


function NotFound() {
	useDocumentTitle(":( No encontrado")
	return (
		<>
			<Content>
				<Title type="h2">
					<h2>
						404
					</h2>
				</Title>	
				<section className="main">
					<Title type="h3">
						<h3>
						404 No Encontrado: La URL solicitada no fue encontrada en el servidor. Si entro la URL manualmente, porfavor verifique que sea correcta e intentelo de nuevo.
						</h3>
					</Title>
					<figure className="logo">
						<img className="logo--imagotype"/>
					</figure>
				</section>
			</Content>
			<Footer />
		</>
	);
}

export { NotFound };