import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "@context/AppContext";
import { useDocumentTitle } from "@hooks/useDocumentTitle";

import { Content } from "@containers/Content";
import { Breadcrumbs } from "@components/Breadcrumbs";
import { Paragraph } from "@components/Paragraph";
import { ButtonGreen } from "@components/ButtonGreen";
import { Title } from "@components/Title";
import { Logo } from "@components/Logo";

function Modelo({ modeloTexto }) {
	const {
		language
	} = useContext(AppContext)

	useDocumentTitle("Modelo Alaisa")

	return (
		<>
			<Content type="margin modelo">
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
						{modeloTexto ?
							(
								<h2>
									{modeloTexto[0]}
								</h2>
							)
							: (
								<h2>¡Comencemos!</h2>
							)
						}
					</Title>

					<Paragraph type="bold">
						{modeloTexto ?
							(
								<p>
									{modeloTexto[1]}
								</p>
							)
							: (
								<p>
									Recuerda que yo no doy diagnósticos ni tratamientos.
								</p>
							)
						}
					</Paragraph>
					<Paragraph type="background">
						{modeloTexto ?
							(
								<>
									<p dangerouslySetInnerHTML={{ __html: `${modeloTexto[2]}` }} />
									<p>
										{modeloTexto[3]}
									</p>
								</>
							)
							: (
								<>
									<p>
										Soy una herramienta para que, junto con tu <span>criterio médico</span>, puedas saber la tendencia del desenlace de tu paciente y puedas actuar a partir de eso. Espero poder <span>ayudarte</span> y que al mismo tiempo me ayudes a mí a <span>aprender</span> más.
									</p>
									<p>
										Así, yo voy a poder ayudar a más pacientes y médicos que me necesiten.
									</p>
								</>
							)
						}
					</Paragraph>

					<Paragraph type="bold">
						{modeloTexto ?
							(
								<p>
									{modeloTexto[4]}
								</p>
							)
							: (
								<p>
									Es un placer para mí estar a tus órdenes.
								</p>
							)
						}
					</Paragraph>

					<div className="link--terms">
						<Link to="/privacidad">
							{modeloTexto ?
								(
									<span>{modeloTexto[5]}</span>
								)
								: (
									<span> términos y condiciones</span>
								)
							}
						</Link>
					</div>

					{modeloTexto?
						(
							<ButtonGreen link="prediccion" texto={modeloTexto[6]} />
						)
						: (
							<ButtonGreen link="prediccion" texto="Comenzar" />
						)
					}

					<div className="link--white">
						<Link to="/privacidad">
							{modeloTexto ?
								(
									<span>{modeloTexto[7]}</span>
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

export { Modelo };