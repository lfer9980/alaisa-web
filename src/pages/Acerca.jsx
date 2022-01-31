import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Footer } from '@components/Footer';

function Acerca() {
	useDocumentTitle('Acerca de');

	return (
		<>
			<main className="acerca">
				<div className="acerca__title">
					<h2>
						Qué es <span>Alaisa</span>? 
					</h2>
				</div>
				<div className="acerca__main">
					<div className="acerca__main__parrafo">
						<p>ALAISA es un proyecto de Evaluación de las características sociales, demográficas y clínicas de la población de la ciudad de Chihuahua y su posible relación con la enfermedad causada por el SARS-CoV-2 a través de un modelo de predicción de desenlace de Machine learning.</p>
					</div>
					<div className="acerca__main__parrafo--primary">
						<p>Puedes encontrar la documentación sobre el concepto base para crear “Alaisa” en el siguiente enlace:</p>
					</div>
					<div className="acerca__main__link">
						<a href="*">Algoritmos y Covid 19</a>
					</div>
					<div className="acerca__main__logo">
						<div className="acerca__main__logo--imagotipo"> </div>
						<div className="acerca__main__logo--tipografico" />
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export { Acerca };