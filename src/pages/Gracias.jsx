import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "@hooks/useDocumentTitle";

import { Content } from "@containers/Content";
import { Title } from "@components/Title";
import { Breadcrumbs } from "@components/Breadcrumbs";
import { ButtonGreen } from "@components/ButtonGreen";
import { Paragraph } from "@components/Paragraph";
import { Logo } from "@components/Logo";
import { AppContext } from "@context/AppContext";

function Gracias() {
	const {
		language
	} = useContext(AppContext)

	useDocumentTitle("Muchas gracias");

	return (
		<>
			<Content type="margin">
				<Breadcrumbs url="entrenamiento">
					{language ? "End" : "finalizar"}
				</Breadcrumbs>
				<section className="main no-background">
					<Logo type="isotype" />
					<Title type="h2 blue">
						<h2>
							{language ? "Thank You so Much!" : "¡Muchas gracias!"}
						</h2>
					</Title>
					<Paragraph type="bold">
						<p>
							{language ? "With your contribution, we will achieve great things...." : "Con tu contribución, lograremos grandes cosas.."}
						</p>
					</Paragraph>
					<ButtonGreen texto={language ? "Make another contribution" : "Hacer otra contribución"} link="anadir" />
					<div className="link--terms">
						<Link to="/">
							<span>
								{language ? "Back to home page" : "Regresar a la página principal"}
							</span>
						</Link>
					</div>
				</section>
			</Content>
		</>
	);
}

export { Gracias };