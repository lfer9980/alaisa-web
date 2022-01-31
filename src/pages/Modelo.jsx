import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Breadcrumbs } from "@components/Breadcrumbs";
import { ButtonGreen } from "@components/ButtonGreen";
import { Link } from "react-router-dom";

function Modelo() {
	useDocumentTitle("Modelo Alaisa")
	return (
		<main className="model">
			<Breadcrumbs url="/" section="Modelo" />
			<section className="model__main">
				<div className="back-button light">
					<Link to="/">
						<span> 
							<i className="material-icons">arrow_back</i>
						</span>
					</Link>
				</div>
				<div className="alaisa__isotipo" />
				<div className="model__main__title">
					<h2>¡Comencemos!</h2>
				</div>
				<div className="model__main__subtitle">
					<p>Recuerda que yo no doy diagnósticos ni tratamientos. </p>
				</div>
				<div className="model__main__parrafo1">
					<p>Soy una herramienta para que, junto con tu <span>criterio médico</span>, puedas saber la tendencia del desenlace de tu paciente y puedas actuar a partir de eso. Espero poder <span>ayudarte</span> y que al mismo tiempo me ayudes a mí a <span>aprender</span> más.<br />Así, yo voy a poder ayudar a más pacientes y médicos que me necesiten.</p>
				</div>
				<div className="model__main__parrafo2">
					<h4>Es un placer para mí estar a tus órdenes.</h4>
				</div>
				<div className="content-input">
						<span>		
							Consulta los		
							<Link to="/privacidad">
								<span> términos y condiciones</span>
							</Link>
						</span>
					</div>
				<ButtonGreen link="prediccion" text="Comenzar" />
				<div className="training__main__priv">
					<Link to="/privacidad">
						<span>Aviso de privacidad</span>
					</Link>
				</div>
			</section>
		</main>
	);
}

export { Modelo };