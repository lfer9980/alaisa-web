import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { Footer } from "@components/Footer";

import { Title } from "@components/Title";
import { Logo } from "@components/Logo";

function Acerca() {
	useDocumentTitle("Acerca de");

	return (
		<>
			<Content>
				<Title type="h2" text="¿Qué es Alaisa?" />
				<div className="paragraph">
					<p>ALAISA es un proyecto de Evaluación de las características sociales, demográficas y clínicas de la población de la ciudad de Chihuahua y su posible relación con la enfermedad causada por el SARS-CoV-2 a través de un modelo de predicción de desenlace de Machine learning.</p>
				</div>
				<div className="paragraph--bold">
					<p>Puedes encontrar la documentación sobre el concepto base para crear “Alaisa” en el siguiente enlace:</p>
				</div>
				<div className="link">
					<a href="*">Algoritmos y Covid 19</a>
				</div>
				<Logo type="imagotype" color="black"/> 
			</Content>
			<Footer />
		</>
	);
}

export { Acerca };