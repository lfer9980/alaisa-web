import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Link } from "react-router-dom";
import { Content } from "@containers/Content";
import { Title } from "@components/Title";
import { Logo } from "@components/Logo";
import { Paragraph } from "@components/Paragraph";
import { Footer } from "@components/Footer";
import { Breadcrumbs } from "@components/Breadcrumbs"; 
import { ButtonGreen } from "@components/ButtonGreen";


function Resultado() {
	useDocumentTitle("resultado listo")
	return (
		<>
			<Content>
				<Breadcrumbs url="modelo" section="resultado"/>
				<section className="main">
					<Logo type="isotype"/>
					<Title type="h2">
						<h2>
							La predicción para el paciente ingresado es:
						</h2>
					</Title>
					<Paragraph type="result">
						<span>RESULTADO</span>
					</Paragraph>
					<Paragraph type="">
						Gracias por utilizar nuestro servicio, es un placer ayudar.
					</Paragraph>
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