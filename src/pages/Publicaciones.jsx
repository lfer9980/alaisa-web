import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { Paragraph } from "@components/Paragraph";
import { Subtitle } from "@components/Subtitle";
import { Title } from "@components/Title";
import { Footer } from "@components/Footer";


function Publicaciones() {
	useDocumentTitle("Publicaciones")

	return(
		<> 
			<Content>
				<section className="main">
					<Subtitle type="background">
						<h2>Publiaciones</h2>
					</Subtitle>
					<Title type="h3">
						<h3>
							2022
						</h3>
					</Title>
					<Paragraph type="">
						<span className="paragraph__span">
							Referencia a publicacion 1,
						</span>
							breve descripción de la publicación para llegar al link de la publicacion
					</Paragraph>
					<hr /> 
				</section>
				<section className="main">
					<Subtitle type="background">
						<h2>Ultimas actualizaciones</h2>
					</Subtitle>
					<Title type="h3">
						<h3>
							v1.0.0
						</h3>
					</Title>	
					<Paragraph type="">
						<span className="paragraph__span">
							Referencia a publicacion 1,
						</span>
							breve descripción de la publicación para llegar al link de la publicacion
					</Paragraph>
					<hr /> 
				</section>
			</Content>
			<Footer />
		</>
	);
}

export { Publicaciones };