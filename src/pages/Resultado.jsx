import React, { useContext } from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { AppContext } from "@context/AppContext";

import { Link } from "react-router-dom";
import { Content } from "@containers/Content";
import { Title } from "@components/Title";
import { Logo } from "@components/Logo";
import { Paragraph } from "@components/Paragraph";
import { Breadcrumbs } from "@components/Breadcrumbs"; 
import { ButtonGreen } from "@components/ButtonGreen";


function Resultado() {
	const {
		language
	} = useContext(AppContext)

	useDocumentTitle("resultado listo")
	return (
		<>
			<Content type="margin">
				<Breadcrumbs url="modelo">
					{language ? "End": "Finalizar"}
				</Breadcrumbs>
				<section className="main no-background">
					<Logo type="isotype"/>
					<Title type="h3">
						<h3>
							{language ? "The prediction for the admitted patient is:": "La predicción para el paciente ingresado es:"}
						</h3>
					</Title>
					<Paragraph type="result">
						<span>
							
						</span>
					</Paragraph>
					<Paragraph type="">
						<p>
							{language ? "Thank you for using our service, it is a pleasure to help.": "Gracias por utilizar nuestro servicio, es un placer ayudar."}
						</p>
					</Paragraph>
					<ButtonGreen texto={language ? "Make another prediction": "Hacer otra predicción"} link="prediccion"/>
					<div className="link">
						<Link to="/">
							<span >
								{language ? "Back to home page" : "Regresar a la página principal"}
							</span>
						</Link>
					</div>
				</section>
			</Content>
		</>
	);
}

export { Resultado };