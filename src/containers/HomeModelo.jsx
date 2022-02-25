import React, { useContext } from 'react';
import {  AppContext } from "@context/AppContext";
import { ButtonGreen } from '@components/ButtonGreen';
import { Title } from "@components/Title";
import { Paragraph } from "@components/Paragraph";
import { Subtitle } from "@components/Subtitle";

function HomeModelo() {
	const {
		modeloVisible,
		modelo,
		animateFadeInUp,
		animateFlipInY,
		animateFadeInLeft,
		animateFadeInRight,
	} = useContext(AppContext);

	return (
		<section className='wrapper' id='modelo' ref={modelo}>
			<Title type={`main margin ${modeloVisible? animateFadeInUp : 'trans'} `}>
				<h2>
					<span>ALAISA</span> puede ayudarte a tomar <span>mejores</span> decisiones para el paciente
				</h2>
			</Title>
			<div className="container">
				<Paragraph type={`background margin ${modeloVisible? animateFadeInLeft : 'trans'}`}>
					Sobre todo si tienes muchos y tienes que decidir si alguno necesita más atención, recursos o una cama en UCI.
				</Paragraph>
				<Paragraph type={`background margin ${modeloVisible? animateFadeInRight : 'trans'}`}>
					De hecho, en diferentes estudios se ha visto que los programas como yo llegan a ser más confiables que algunas escalas que usas como <strong>APACHE, qSOFA o CURB-65...</strong> por mencionar algunas.
				</Paragraph>
				<Title type="h3">
					<h3>¡Empieza a utilizar la herramienta!</h3>
				</Title>
				<ButtonGreen
					text="Entrar al modelo" 
					link="modelo" 
					animation={`${modeloVisible? animateFadeInUp : 'trans' }`}

					/>
			</div>
		</section>
	);
}

export { HomeModelo };
