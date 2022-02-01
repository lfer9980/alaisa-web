import React from "react";
import { ButtonGreen } from "@components/ButtonGreen";

function HomeHero({ children }) {
	return (
		<section className="hero wrapper section" id="hero">
			<div className="hero__title .trans">
				<h1>
					Evaluación
					<br />
					<span> efectiva </span>del COVID-19 con tecnología en <span>CUU</span>
					.
				</h1>
			</div>
			<div className="hero__saludo">
				<h2>¡Hola! Soy Alaisa</h2>
			</div>
			<div className="hero__subtitle">
				<h3>Fui creado con la idea de ayudar en los hospitales.</h3>
			</div>
			<div className="hero__parrafo--button">
				<p>
					Me enseñaron a identificar características en los personas con{" "}
					<strong>COVID-19</strong> para saber si los pacientes tienen más
					posibilidades de darse de alta o de fallecer por esta enfermedad.
				</p>
			</div>
			<ButtonGreen text="Comienza aquí" link="modelo"/>
			<div className="hero-inari">
				desarrollador por INARI ABS
			</div>
		</section>
	);
}

export { HomeHero };
