import React from 'react';
import { ButtonGreen } from '@components/ButtonGreen';
import { Title } from "@components/Title";

import "@styles/containers/homeEntrenamiento.scss";

function HomeEntrenamiento() {
	return (
		<section className="wrapper" id="entrenamiento">
			<Title type="main" text="Ayuda a Alaisa a mejorar en sus predicciones"/>
			<div className="container">
				<div className="subtitle">
					<p>
						Se parte de los <span>profesionales de la salud</span> que ayudan a mejorar las predicciones del modelo.
					</p>
				</div>
				<div className="paragraph">
					<p>
						¡Tu contribución, acelera exponencialmente la recolección de datos que sirven para <span>entrenar</span> a la red neuronal y <span>mejorar</span> la calidad de sus predicciones!
					</p>
				</div>
				<div className="paragraph--bold">
					<p>
						Para <span>contribuir</span>, solo debes entrar al entrenamiento
					</p>
				</div>
				<div className="paragraph">
					<p>
						No te preocupes, el proceso es el mismo a cuando utilizas el modelo para recibir predicciones.
					</p>
				</div>
				<ButtonGreen text="Entrar al entrenamiento" link="entrenamiento"/>
			</div>
		</section>
	);
}

export { HomeEntrenamiento };
