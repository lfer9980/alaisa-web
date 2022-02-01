import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Breadcrumbs } from "@components/Breadcrumbs";
import { ButtonGreen } from "@components/ButtonGreen";
import { Link } from "react-router-dom";

function Entrenamiento() {
	useDocumentTitle("Entrenamiento");
	return(
		<main className="training">
			<Breadcrumbs url="/" section="Entrenamiento" />
				<section className="training__main">
					<div className="back-button light">
						<Link to="/">
							<span> 
								<i className="material-icons">arrow_back</i>
							</span>
						</Link>
					</div>
					<div className="alaisa__isotipo" />
					<div className="training__main__title">
						<h2>
							Tu contribución nos ayuda a <span>mejorar</span> y ser más <span>precisos</span>
						</h2>
					</div>
					<div className="training__main__parrafo1">
						<p>
							El proceso es identico a cuando utilizas el modelo para recibir predicciones. Los <span>datos</span> que ingreses durante el <span>entrenamiento</span> serán la base para que el modelo <span>identifique</span> eficientemente los patrones que determinan el desenlace de tu paciente durante la <span>predicción</span>.
						</p>
					</div>
					<div className="training__main__parrafo2">
						<h4>
							Estamos muy agradecidos contigo, tu ayuda hace la diferencia.
						</h4>
					</div>
					<div className="content-input">
						<span>		
							Consulta los		
							<Link to="/privacidad">
								<span> términos y condiciones</span>
							</Link>
						</span>
					</div>
					<ButtonGreen link="anadir" text="Comenzar" />
					<div className="training__main__priv">
						<Link to="/privacidad">
							<span>Aviso de privacidad</span>
						</Link>
					</div>
				</section>
		</main>
	);
}

export { Entrenamiento };