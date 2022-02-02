import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { Footer } from "@components/Footer";

function Acerca() {
	useDocumentTitle("Acerca de");

	return (
		<>
			<Content>
				<div className="title-h2">
					<h2>
						¿Qué es <span>Alaisa</span>? 
					</h2>
				</div>
				<div className="paragraph">
					<p>ALAISA es un proyecto de Evaluación de las características sociales, demográficas y clínicas de la población de la ciudad de Chihuahua y su posible relación con la enfermedad causada por el SARS-CoV-2 a través de un modelo de predicción de desenlace de Machine learning.</p>
				</div>
				<div className="paragraph--bold">
					<p>Puedes encontrar la documentación sobre el concepto base para crear “Alaisa” en el siguiente enlace:</p>
				</div>
				<div className="link">
					<a href="*">Algoritmos y Covid 19</a>
				</div>
				<figure className="logo">
					<img className="logo--imagotype"/>
				</figure>
			</Content>
			<Footer />
		</>
	);
}

export { Acerca };