import React, { useContext } from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { Title } from "@components/Title";
import { Logo } from "@components/Logo";
import { Paragraph } from "@components/Paragraph";
import { LinkAnchor } from "@components/LinkAnchor";
import { Footer } from "@components/Footer";
import { Breadcrumbs } from "@components/Breadcrumbs";
import { AppContext } from "@context/AppContext";

function Acerca({ acercaTexto, footerTexto }) {
	const {
		language
	} = useContext(AppContext)

	useDocumentTitle("Acerca de ALAISA");
	return (
		<>
			<Content type="margin">
				<Breadcrumbs>
					{language ? "About ALAISA" : "Acerca de ALAISA"}
				</Breadcrumbs>

				<Title type="h2">
					{acercaTexto ?
						(
							<h2 dangerouslySetInnerHTML={{ __html: `${acercaTexto[0]}` }} />
						)
						: (
							<h2>
								¿Qué es <span>Alaisa</span>?
							</h2>
						)
					}
				</Title>

				<Paragraph type="normal">
					{acercaTexto ?
						(
							<p>
								{acercaTexto[1]}
							</p>
						)
						: (
							<p>
								ALAISA es un proyecto de Evaluación de las características sociales, demográficas y clínicas de la población de la ciudad de Chihuahua y su posible relación con la enfermedad causada por el SARS-CoV-2 a través de un modelo de predicción de desenlace de Machine learning.
							</p>
						)
					}
				</Paragraph>

				<Paragraph type="bold">
					{acercaTexto ?
						(
							<p dangerouslySetInnerHTML={{ __html: `${acercaTexto[2]}` }} />
						)
						: (
							<p>
								Puedes encontrar la documentación sobre el concepto base para crear <span>"ALAISA"</span> en el siguiente enlace:
							</p>
						)
					}
				</Paragraph>

				<LinkAnchor href="https://www.dropbox.com/s/shfi3u5pmwi2orj/Outcome%20Classification%20Model%20for%20COVID%20Manuscript.pdf?dl=0">
					{acercaTexto ?
						(
							<>
								{acercaTexto[3]}
							</>
						)
						: (
							"Algoritmos y COVID-19"
						)
					}
				</LinkAnchor>

				<Logo type="imagotype" color="black" />
			</Content>
			<Footer footerTexto={footerTexto} />
		</>
	);
}

export { Acerca };