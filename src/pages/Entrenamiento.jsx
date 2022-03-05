import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "@context/AppContext";
import { useDocumentTitle } from "@hooks/useDocumentTitle";

import { Content } from "@containers/Content";
import { Title } from "@components/Title";
import { Logo } from "@components/Logo";
import { Paragraph } from "@components/Paragraph";
import { Breadcrumbs } from "@components/Breadcrumbs";
import { ButtonGreen } from "@components/ButtonGreen";

function Entrenamiento({ entrenamientoTexto }) {
	const {
		language
	} = useContext(AppContext)

	useDocumentTitle("Entrenamiento");

	return (
		<>
			<Content type="margin entrenamiento">
				<Breadcrumbs>
					{language ? "Model" : "Modelo"}
				</Breadcrumbs>

				<div className="back-button">
					<Link to="/">
						<span>
							<i className="material-icons">arrow_back</i>
						</span>
					</Link>
				</div>

				<section className="main">
					<Logo type="isotype" />

					<Title type="h2">
						{entrenamientoTexto ?
							(
								<h2 dangerouslySetInnerHTML={{ __html: `${entrenamientoTexto[0]}` }} />
							)
							: (
								<h2>Tu contribución nos ayuda a <span>mejorar</span> y ser más <span>precisos</span></h2>
							)
						}
					</Title>

					<Paragraph type="background">
						{entrenamientoTexto ?
							(
								<p dangerouslySetInnerHTML={{ __html: `${entrenamientoTexto[1]}` }} />
							)
							: (
								<p>
									El proceso es identico a cuando utilizas el modelo para recibir predicciones. Los <span>datos</span> que ingreses durante el <span>entrenamiento</span> serán la base para que el modelo <span>identifique</span> eficientemente los patrones que determinan el desenlace de tu paciente durante la <span>predicción</span>.
								</p>
							)
						}
					</Paragraph>

					<Paragraph type="bold">
						{entrenamientoTexto ?
							(
								<p>
									{entrenamientoTexto[2]}
								</p>
							)
							: (
								<p>
									Estamos muy agradecidos contigo, tu ayuda hace la diferencia.
								</p>
							)
						}
					</Paragraph>

					<div className="link--terms">
						<Link to="/privacidad">
							{entrenamientoTexto ?
								(
									<span>{entrenamientoTexto[3]}</span>
								)
								: (
									<span> términos y condiciones</span>
								)
							}
						</Link>
					</div>

					{entrenamientoTexto ?
						(
							<ButtonGreen link="anadir" texto={entrenamientoTexto[4]} />
						)
						: (
							<ButtonGreen link="anadir" texto="Comenzar" />
						)
					}

					<div className="link--white">
						<Link to="/privacidad">
							{entrenamientoTexto ?
								(
									<span>{entrenamientoTexto[5]}</span>
								)
								: (
									<span>Aviso de privacidad</span>
								)
							}
						</Link>
					</div>
				</section>
			</Content>
		</>
	);
}

export { Entrenamiento };