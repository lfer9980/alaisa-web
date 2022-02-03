import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { Footer } from "@components/Footer";
import { Breadcrumbs } from "@components/Breadcrumbs"; 
import { ButtonGreen } from "@components/ButtonGreen";
import { Link } from "react-router-dom";

import { Title } from "@components/Title";

function Resultado() {
	useDocumentTitle("resultado listo")
	return (
		<>
			<Content>
				<Breadcrumbs url="modelo" section="resultado"/>
				<section className="main">
					<figure className="logo"> 
						<img className="logo--isotype"/>
					</figure>
					<Title type="h2" text="	La predicción para el paciente ingresado es:" />
					<div className="paragraph--result">
						<span>RESULTADO</span>
					</div>
					<div className="paragraph">
						<p>Gracias por utilizar nuestro servicio, es un placer ayudar.</p>
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

export { Resultado };