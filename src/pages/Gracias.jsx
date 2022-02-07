import React from "react";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { Title } from "@components/Title";
import { Breadcrumbs } from "@components/Breadcrumbs";
import { ButtonGreen } from "@components/ButtonGreen";
import { Footer } from "@components/Footer";


function Gracias() {
	useDocumentTitle("Muchas gracias");
	
	return (
		<>
			<Content>
				<Breadcrumbs url="entrenamiento" section="finalizar"/>
				<section className="main">
					<figure className="logo"> 
						<img className="logo--isotype"/>
					</figure>
					<Title type="h2">
						<h2>
							¡Muchas gracias!
						</h2>
					</Title>
					<div className="paragraph--bold">
						<p>Con tu contribución, lograremos grandes cosas...</p>
					</div>
					<ButtonGreen text="Hacer otra contribución" link="anadir"/>
					<div className="link">
						<Link to="/">
							<span >Regresar a la página principal</span>
						</Link>
					</div>
				</section>
			</Content>
			<Footer />
		</>
	);
}

export { Gracias };