import React from "react";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { Title } from "@components/Title";
import { Breadcrumbs } from "@components/Breadcrumbs";
import { ButtonGreen } from "@components/ButtonGreen";
import { Paragraph } from "@components/Paragraph";
import { Footer } from "@components/Footer";
import { Logo } from "@components/Logo";


function Gracias() {
	useDocumentTitle("Muchas gracias");
	
	return (
		<>
			<Content type="margin">
				<Breadcrumbs url="entrenamiento">
					finalizar
				</Breadcrumbs>
				<section className="main">
					<Logo type="isotype" />
					<Title type="h2 blue">
						<h2>
							¡Muchas gracias!
						</h2>
					</Title>
					<Paragraph type="bold">
						Con tu contribución, lograremos grandes cosas..
					</Paragraph>
					<ButtonGreen text="Hacer otra contribución" link="anadir"/>
					<div className="link--terms">
						<Link to="/">
							<span >Regresar a la página principal</span>
						</Link>
					</div>
				</section>
			</Content>
		</>
	);
}

export { Gracias };