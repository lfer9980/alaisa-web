import React from "react";
import { ButtonGreen } from "@components/ButtonGreen";
import { Title } from "@components/Title";
import { Paragraph } from "@components/Paragraph";
import { Subtitle } from "@components/Subtitle";



function HomeHero() {
	return (
		<section className="wrapper" id="hero">
			<Title type="h1 margin">
				<h1>
					Evaluación
					<br />
					<span> efectiva </span>del COVID-19 con tecnología en <span>CUU</span>
					.
				</h1>
			</Title>
			<Subtitle type="background">
				<h2>¡Hola! Soy ALAISA</h2>
			</Subtitle>
			<Subtitle type="bold margin">
				<h3>Fui creado con la idea de ayudar en los hospitales.</h3>
			</Subtitle>
			<Paragraph type="rounded margin">
				Me enseñaron a identificar características en los personas con 
				<strong> COVID-19</strong> para saber si los pacientes tienen más
				posibilidades de darse de alta o de fallecer por esta enfermedad.
			</Paragraph>
			<ButtonGreen text="Comienza aquí" link="modelo"/>
			<div className="inari">
				<p>
					Desarrollado con 
					<span className="heart"></span> 
					por INARI ABS
				</p>
			</div>
		</section>
	);
}

export { HomeHero };
