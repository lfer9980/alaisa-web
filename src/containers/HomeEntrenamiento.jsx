import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";
import { Title } from "@components/Title";
import { Paragraph } from "@components/Paragraph";
import { Subtitle } from "@components/Subtitle";
import { ButtonGreen } from '@components/ButtonGreen';

function HomeEntrenamiento() {
	const {
		entrenamientoVisible,
		entrenamiento,
		animateFadeInUp,
	} = useContext(AppContext);

	return (
		<section className="wrapper" id="entrenamiento" ref={entrenamiento}>
			<Title type={`main margin ${entrenamientoVisible? animateFadeInUp : 'trans'} `}>
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
				<ButtonGreen 
					text="Entrar al entrenamiento" 
					link="entrenamiento"
					animation={`${entrenamientoVisible? animateFadeInUp : 'trans' }`}
					/>
			</div>
		</section>
	);
}

export { HomeEntrenamiento };
