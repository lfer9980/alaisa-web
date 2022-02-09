import React from "react";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { Breadcrumbs } from "@components/Breadcrumbs";
import { Paragraph } from "@components/Paragraph";
import { Subtitle } from "@components/Subtitle";
import { ButtonGreen } from "@components/ButtonGreen";
import { Title } from "@components/Title";
import { Logo } from "@components/Logo";

function Modelo() {
	useDocumentTitle("Modelo Alaisa")

	return (
		<>
			<Content type="margin modelo">
				<Breadcrumbs>
					Modelo
				</Breadcrumbs>
				<div className="back-button">
					<Link to="/">
						<span> 
							<i className="material-icons">arrow_back</i>
						</span>
					</Link>
				</div>

				<section className="main">
					<Logo type="isotype"/>
					<Title type="h2">
						<h2>¡Comencemos!</h2>
					</Title>
					<Paragraph type="bold">
						Recuerda que yo no doy diagnósticos ni tratamientos.
					</Paragraph>
					<Paragraph type="background">
						Soy una herramienta para que, junto con tu <span>criterio médico</span>, puedas saber la tendencia del desenlace de tu paciente y puedas actuar a partir de eso. Espero poder <span>ayudarte</span> y que al mismo tiempo me ayudes a mí a <span>aprender</span> más.<br />Así, yo voy a poder ayudar a más pacientes y médicos que me necesiten.
					</Paragraph>
					<Paragraph type="bold blue">
							Es un placer para mí estar a tus órdenes.
					</Paragraph>
					<div className="link--terms">
						<span>		
							Consulta los		
							<Link to="/privacidad">
								<span> términos y condiciones</span>
							</Link>
						</span>
					</div>
					<ButtonGreen link="prediccion" text="Comenzar" />
					<div className="link--white">
						<Link to="/privacidad">
							<span>Aviso de privacidad</span>
						</Link>
					</div>
				</section>
			</Content>
		</>
	);
}

export { Modelo };