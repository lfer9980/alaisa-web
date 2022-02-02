import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { Breadcrumbs } from "@components/Breadcrumbs";
import { ButtonGreen } from "@components/ButtonGreen";
import { Link } from "react-router-dom";

function Entrenamiento() {
	useDocumentTitle("Entrenamiento");

	return(
		<>
			<Content>
				<Breadcrumbs url="/" section="Entrenamiento" />
				<div className="back-button">
					<Link to="/">
						<span> 
							<i className="material-icons">arrow_back</i>
						</span>
					</Link>
				</div>

				<section className="main">
					<figure className="logo"> 
						<img className="logo--isotype"/>
					</figure>
					<div className="title-h3">
						<h3>
							Tu contribución nos ayuda a <span>mejorar</span> y ser más <span>precisos</span>
						</h3>
					</div>
					<div className="paragraph--background">
						<p>
							El proceso es identico a cuando utilizas el modelo para recibir predicciones. Los <span>datos</span> que ingreses durante el <span>entrenamiento</span> serán la base para que el modelo <span>identifique</span> eficientemente los patrones que determinan el desenlace de tu paciente durante la <span>predicción</span>.
						</p>
					</div>
					<div className="paragraph--bold">
						<p>
							Estamos muy agradecidos contigo, tu ayuda hace la diferencia.
						</p>
					</div>
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