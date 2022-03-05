import React, { useContext } from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { Paragraph } from "@components/Paragraph";
import { Subtitle } from "@components/Subtitle";
import { Title } from "@components/Title";
import { Footer } from "@components/Footer";
import { Breadcrumbs } from "@components/Breadcrumbs";
import { AppContext } from "@context/AppContext";

function Privacidad({ privTexto }) {
	const {
		language
	} = useContext(AppContext)

	useDocumentTitle("privacidad")
	return (
		<>
			<Content type="margin">
				<Breadcrumbs>
					{language ? "Privacy" : "Privacidad"}
				</Breadcrumbs>

				<Title type="h2">
					{privTexto ?
						(
							<h2 dangerouslySetInnerHTML={{ __html: `${privTexto[0]}` }} />
						)
						: (
							<h2>
								Tu privacidad es muy <span>importante</span> y nosotros lo sabemos.
							</h2>
						)
					}
				</Title>

				<Subtitle type="bold">
					{privTexto ?
						(
							<h3>
								{privTexto[1]}
							</h3>
						)
						: (
							<h3>
								Consulta nuestro aviso de privacidad
							</h3>
						)
					}
				</Subtitle>

				<Paragraph type=" align-left">
					{privTexto ?
						(
							<p>
								{privTexto[2]}
							</p>
						)
						: (
							<p>
								Hospital Central Universitario, con domicilio en No. 3302, calle Rosales, Roma Sur, C. P. 31350, Chihuahua, México, teléfono (614)-180-0800, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
							</p>
						)
					}
				</Paragraph>

				<Subtitle type="bold">
					{privTexto ?
						(
							<h3>
								{privTexto[3]}
							</h3>
						)
						: (
							<h3>
								¿Para qué fines utilizaremos sus datos personales?
							</h3>
						)
					}
				</Subtitle>

				<Paragraph type=" align-left">
					{privTexto ?
						(
							<p>
								{privTexto[4]}
							</p>
						)
						: (
							<p>
								Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
							</p>
						)
					}
				</Paragraph>

				<ul className="paragraph--list">
					{privTexto ?
						(
							<>
								<li>
									{privTexto[5]}
								</li>
								<li>
									{privTexto[6]}
								</li>
								<li>
									{privTexto[7]}
								</li>
								<li>
									{privTexto[8]}
								</li>
							</>
						)
						: (
							<>
								<li>
									Respuesta a mensajes del formulario de contacto.
								</li>
								<li>
									Prestación de cualquier servicio solicitado.
								</li>
								<li>
									Registro epidemiológico.
								</li>
								<li>
									Investigación científica con fines estadísticos.
								</li>
							</>
						)
					}
				</ul>

				<Subtitle type="bold">
					{privTexto ?
						(
							<h3>
								{privTexto[9]}
							</h3>
						)
						: (
							<h3>
								¿Dónde puedo consultar el aviso de privacidad integral?
							</h3>
						)
					}
				</Subtitle>

				<Paragraph type=" align-left">
					{privTexto ?
						(
							<p>
								{privTexto[10]}
							</p>
						)
						: (
							<p>
								Para conocer mayor información sobre los términos y condiciones en que serán tratados sus datos personales, como los terceros con quienes compartimos su información personal y la forma en que podrá ejercer sus derechos ARCO, puede consultar el aviso de privacidad integral con una petición vía correo electrónico:
							</p>
						)
					}
				</Paragraph>

				<div className="link">
					<a href="mailto:alaisadnn@gmail.com">
						alaisadnn@gmail.com
					</a>
				</div>

				<div className="date">
					{privTexto ?
						(
							<>
								<p>
									{privTexto[11]}
								</p>
								<div className="date__main">
									<span>
										{privTexto[12]}
									</span>
								</div>
							</>
						)
						: (
							<>
								<p>
									Fecha de la ultima actualización:
								</p>
								<div className="date__main">
									<span>30 de jun 2021</span>
								</div>
							</>
						)
					}
				</div>

			</Content>
			<Footer />
		</>
	);
}

export { Privacidad };