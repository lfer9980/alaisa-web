import React from "react";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { Title } from "@components/Title";
import { Logo } from "@components/Logo";
import { Paragraph } from "@components/Paragraph";
import { Breadcrumbs } from "@components/Breadcrumbs";
import { ButtonGreen } from "@components/ButtonGreen";

function Entrenamiento() {
	useDocumentTitle("Entrenamiento");

	return(
		<>
			<Content type="margin entrenamiento">
				<Breadcrumbs>
					Entrenamiento
				</Breadcrumbs>
				<div className="back-button">
					<Link to="/">
						<span> 
							<i className="material-icons">arrow_back</i>
						</span>
					</Link>
				</div>

				<section className="main">
					<Logo type="isotype"/>
					<Title type="h2">
						<h2>Tu contribución nos ayuda a <span>mejorar</span> y ser más <span>precisos</span></h2>
					</Title>
					<Paragraph type="background">
						El proceso es identico a cuando utilizas el modelo para recibir predicciones. Los <span>datos</span> que ingreses durante el <span>entrenamiento</span> serán la base para que el modelo <span>identifique</span> eficientemente los patrones que determinan el desenlace de tu paciente durante la <span>predicción</span>.
					</Paragraph>
					<Paragraph type="bold">
						Estamos muy agradecidos contigo, tu ayuda hace la diferencia.
					</Paragraph>
					<div className="link--terms">
						<span>		
							Consulta los		
							<Link to="/privacidad">
								<span> términos y condiciones</span>
							</Link>
						</span>
					</div>
					<ButtonGreen link="anadir" text="Comenzar" />
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

export { Entrenamiento };