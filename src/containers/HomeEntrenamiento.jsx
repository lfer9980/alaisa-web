import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";
import { Title } from "@components/Title";
import { Paragraph } from "@components/Paragraph";
import { Subtitle } from "@components/Subtitle";
import { ButtonGreen } from '@components/ButtonGreen';

function HomeEntrenamiento({ trainTexto }) {
	const {
		entrenamientoVisible,
		entrenamiento,
		animateFadeInUp,
	} = useContext(AppContext);

	return (
		<section className="wrapper" id="entrenamiento" ref={entrenamiento}>
			{trainTexto ?
				(
					<>
						<Title type={`main margin ${entrenamientoVisible ? animateFadeInUp : 'trans'} `}>
							<h2 dangerouslySetInnerHTML={{ __html: `${trainTexto[0]}` }} />
						</Title>
						<div className="container margin">
							<Subtitle type="">
								<p dangerouslySetInnerHTML={{ __html: `${trainTexto[1]}` }} />
							</Subtitle>
							<Paragraph type="">
								<p dangerouslySetInnerHTML={{ __html: `${trainTexto[2]}` }} />
							</Paragraph>
							<Paragraph type="bold">
								<p dangerouslySetInnerHTML={{ __html: `${trainTexto[3]}` }} />
							</Paragraph>
							<Paragraph type="">
								<p dangerouslySetInnerHTML={{ __html: `${trainTexto[4]}` }} />
							</Paragraph>
							<ButtonGreen
								texto={`${trainTexto[5]}`}
								link="entrenamiento"
								animation={entrenamientoVisible ? animateFadeInUp : 'trans'}
							/>
						</div>
					</>
				)
				: (
					<>
						<Title type={`main margin ${entrenamientoVisible ? animateFadeInUp : 'trans'} `}>
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
								<p>
									¡Tu contribución, acelera exponencialmente la recolección de datos que sirven para <span>entrenar</span> a la red neuronal y <span>mejorar</span> la calidad de sus predicciones!
								</p>
							</Paragraph>
							<Paragraph type="bold">
								<p>
									¡Puedes ayudar a mejorar el modelo de forma gratuita!
								</p>
							</Paragraph>
							<Paragraph type="">
								<p>
									No te preocupes, el proceso es el mismo a cuando utilizas el modelo para recibir predicciones.
								</p>
							</Paragraph>
							<ButtonGreen
								texto="Entrar al entrenamiento"
								link="entrenamiento"
								animation={entrenamientoVisible ? animateFadeInUp : 'trans'}
							/>
						</div>
					</>
				)
			}
		</section>
	);
}

export { HomeEntrenamiento };
