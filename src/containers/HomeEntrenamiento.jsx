import React from 'react';
import { ButtonGreen } from '@components/ButtonGreen';
import { Title } from "@components/Title";
import { Paragraph } from "@components/Paragraph";
import { Subtitle } from "@components/Subtitle";



function HomeEntrenamiento() {
	return (
		<section className="wrapper" id="entrenamiento">
			<Title type="main">
				<h2>
					Ayuda a <span>ALAISA</span> a mejorar en sus predicciones
				</h2>
			</Title>
			<div className="container margin">
				<Subtitle type="">
					<p>
						Se parte de los <span>profesionales de la salud</span> que ayudan a mejorar las predicciones del modelo.
					</p>
				</Subtitle>
				<Paragraph type="">
					¡Tu contribución, acelera exponencialmente la recolección de datos que sirven para <span>entrenar</span> a la red neuronal y <span>mejorar</span> la calidad de sus predicciones!
				</Paragraph>
				<Paragraph type="bold">
					Para <span>contribuir</span>, solo debes entrar al entrenamiento
				</Paragraph>
				<Paragraph type="">
					No te preocupes, el proceso es el mismo a cuando utilizas el modelo para recibir predicciones.
				</Paragraph>
			</div>
			<ButtonGreen text="Entrar al entrenamiento" link="entrenamiento"/>
		</section>
	);
}

export { HomeEntrenamiento };
