import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { Footer } from "@components/Footer";

function NotFound() {
	useDocumentTitle(":( No encontrado")
	return (
		<>
			<Content>
				<div className="title-h2">
					<h2> 404 </h2>
				</div>
				<section className="main">
					<div className="title-h3">
						<h3> 404 No Encontrado: La URL solicitada no fue encontrada en el servidor. Si entro la URL manualmente, porfavor verifique que sea correcta e intentelo de nuevo. </h3>
					</div>
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