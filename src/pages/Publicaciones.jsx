import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { Footer } from "@components/Footer";

function Publicaciones() {
	useDocumentTitle("Publicaciones")

	return(
		<> 
			<Content>
				<div className="subtitle--background">
					<h2>Publicaciones</h2>
				</div>
				<section className="main">
					<div className="title-h3">
						<h3>2022</h3>
					</div>
					<div className="paragraph">
						<span className="paragraph__span">
							Referencia a publicacion 1,
						</span>
						<p>
							breve descripción de la publicación para llegar al link de la publicacion
						</p>
						<hr /> 
					</div>
				</section>
				<div className="subtitle--background">
					<h2>Ultimas actualizaciones</h2>
				</div>
				<section className="main">
					<div className="title-h3">
						<h3>v1.0.0</h3>
					</div>
					<div className="paragraph">
						<span className="paragraph__span">
							Referencia a publicacion 1,
						</span>
						<p>
							breve descripción de la publicación para llegar al link de la publicacion
						</p>
						<hr /> 
					</div>
				</section>
			</Content>
			<Footer />
		</>
	);
}

export { Publicaciones };