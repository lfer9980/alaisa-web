import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { Footer } from "@components/Footer";

import { Title } from "@components/Title";


function Publicaciones() {
	useDocumentTitle("Publicaciones")

	return(
		<> 
			<Content>
				<div className="subtitle--background">
					<h2>Publicaciones</h2>
				</div>
				<section className="main">
					<Title type="h3" text="2022" />	
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
					<Title type="h3" text="v1.0.0" />	
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