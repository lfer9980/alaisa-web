import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Footer } from "@components/Footer";
import { Breadcrumbs } from "@components/Breadcrumbs"; 
import { ButtonGreen } from "@components/ButtonGreen";
import { Link } from "react-router-dom";

function Resultado() {
	useDocumentTitle("resultado listo")
	return (
		<>
			<main className="result">
				<Breadcrumbs url="modelo" section="resultado"/>
				<section className="result__main">
					<div className="alaisa__isotipo"> </div>
					<div className="result__main__title">
						<h2>La predicción para el paciente ingresado es:</h2>
					</div>
					<div className="result__main__result">
						<span>RESULTADO</span>
					</div>
					<div className="result__main__parrafo">
						<p>Gracias por utilizar nuestro servicio, es un placer ayudar.</p>
					</div>
					<ButtonGreen text="Hacer otra contribución" link="anadir"/>
					<div className="gracias__main__back">
						<Link to="/">
							<span >Regresar a la página principal</span>
						</Link>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

export { Resultado };