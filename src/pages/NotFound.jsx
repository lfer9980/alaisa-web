import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Footer } from "@components/Footer";

function NotFound() {
	useDocumentTitle(":( No encontrado")
	return (
		<>
			<main className="acerca">
				<div className="acerca__title">
					<h2> 404 </h2>
				</div>
				<div className="acerca__main">
					<div className="acerca__main__parrafo">
						<p> 404 No Encontrado: La URL solicitada no fue encontrada en el servidor. Si entro la URL manualmente, porfavor verifique que sea correcta e intentelo de nuevo. </p>
					</div>
					<div className="acerca__main__logo">
						<div className="acerca__main__logo--imagotipo"> </div>
						<div className="acerca__main__logo--tipografico" />
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export { NotFound };