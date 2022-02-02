import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { Breadcrumbs } from "@components/Breadcrumbs";
import { ButtonGreen } from "@components/ButtonGreen";
import { Link } from "react-router-dom";

function Modelo() {
	useDocumentTitle("Modelo Alaisa")

	return (
		<>
			<Content>
				<Breadcrumbs url="/" section="Modelo" />
				<div className="back-button">
					<Link to="/">
						<span> 
							<i className="material-icons">arrow_back</i>
						</span>
					</Link>
				</div>

				<section className="main">
					<figure className="logo"> 
						<img className="logo--isotype"/>
					</figure>
					<div className="title-h3">
						<h3>
							¡Comencemos!
						</h3>
					</div>
					<div className="paragraph--bold">
						<p>Recuerda que yo no doy diagnósticos ni tratamientos. </p>
					</div>
					<div className="paragraph--background">
						<p>Soy una herramienta para que, junto con tu <span>criterio médico</span>, puedas saber la tendencia del desenlace de tu paciente y puedas actuar a partir de eso. Espero poder <span>ayudarte</span> y que al mismo tiempo me ayudes a mí a <span>aprender</span> más.<br />Así, yo voy a poder ayudar a más pacientes y médicos que me necesiten.</p>
					</div>
					<div className="paragraph--subtitle">
						<h5>Es un placer para mí estar a tus órdenes.</h5>
					</div>
					<div className="link">
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