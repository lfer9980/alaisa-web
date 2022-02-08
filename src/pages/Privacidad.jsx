import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { Paragraph } from "@components/Paragraph";
import { Subtitle } from "@components/Subtitle";
import { Title } from "@components/Title";
import { Footer } from "@components/Footer";


function Privacidad() {
	useDocumentTitle("privacidad")
	return (
		<>
			<Content>
				<Title type="h2">
					<h2>
						Tu privacidad es muy importante y nosotros lo sabemos.
					</h2>
				</Title>
				<Title type="h4">
					<h4>
						Consulta nuestro aviso de privacidad
					</h4>
				</Title>
				<Paragraph type="">
					Hospital Central Universitario, con domicilio en No. 3302, calle Rosales, Roma Sur, C. P. 31350, Chihuahua, México, teléfono (614)-180-0800, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
				</Paragraph>
				<Subtitle type="subtitle">
					<h5>¿Para qué fines utilizaremos sus datos personales?</h5>
				</Subtitle>
				<Paragraph type="paragraph">
					Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
				</Paragraph>
				<ul className="paragraph--list">
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
				</ul>
				<Subtitle type="subtitle">
					<h5>¿Dónde puedo consultar el aviso de privacidad integral?</h5>
				</Subtitle>
				<Paragraph type="bold">
						Para conocer mayor información sobre los términos y condiciones en que serán tratados sus datos personales, como los terceros con quienes compartimos su información personal y la forma en que podrá ejercer sus derechos ARCO, puede consultar el aviso de privacidad integral con una petición vía correo electrónico:
				</Paragraph>
				<div className="link">
					<a href="mailto:proyectocovidcuu@gmail.com">
						proyectocovidcuu@gmail.com 
					</a>
				</div>
				<Paragraph type="bold">
					Última actualización de este aviso de privacidad:
				</Paragraph>
				<div className="date">
					<span>
						30 de jun 2021
					</span>
				</div>
			</Content>
			<Footer />
		</>
	);
}

export { Privacidad };