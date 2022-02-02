import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Footer } from "@components/Footer";

function Publicaciones() {
	useDocumentTitle("Publicaciones")
	return(
		<> 
			<main className="publicaciones">
				<section className="publicaciones__year">
					<h4 className="title--blue">
						2022
					</h4>
					<div className="publicaciones__content">
						<span>
							Referencia a publicacion 1,
						</span>
						<p>
							breve descripción de la publicación para llegar al link de la publicacion
						</p>
						<hr /> 
					</div>
				</section>
				<section className="publicaciones__updates">
					<h4 className="title--blue">
						v1.0.0
					</h4>
					<div className="publicaciones__content">
						<span>
							Referencia a publicacion 1,
						</span>
						<p>
							breve descripción de la publicación para llegar al link de la publicacion
						</p>
						<hr /> 
					</div>
				</section>
			</main>
			<Footer />
		</>

	);
}

export { Publicaciones };