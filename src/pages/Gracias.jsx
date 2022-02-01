import React from "react";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Breadcrumbs } from "@components/Breadcrumbs";
import { Footer } from "@components/Footer";
import { ButtonGreen } from "@components/ButtonGreen";

function Gracias() {
	useDocumentTitle("Muchas gracias");
	return (
		<>
			<main className="gracias">
				<Breadcrumbs url="entrenamiento" section="finalizar"/>
				<section className="gracias__main">
					<div className="alaisa__isotipo">
					</div>
					<div className="gracias__main__title">
						<h2>¡Muchas gracias!</h2>
					</div>
					<div className="gracias__main__parrafo">
						<p>Con tu contribución, lograremos grandes cosas...</p>
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

export { Gracias };