import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { Paragraph } from "@components/Paragraph";
import { Subtitle } from "@components/Subtitle";
import { Title } from "@components/Title";
import { Footer } from "@components/Footer";
import { Breadcrumbs } from "@components/Breadcrumbs";

function Privacidad() {
	useDocumentTitle("privacidad")
	return (
		<>
			<Content type="margin">
				<Breadcrumbs>
					Privacidad
				</Breadcrumbs>
				<Title type="h2">
					<h2>
						Tu privacidad es muy <span>importante</span> y nosotros lo sabemos.
					</h2>
				</Title>
				<Subtitle type="bold">
					<h3>
						Consulta nuestro aviso de privacidad
					</h3>
				</Subtitle>
				<Paragraph type=" align-left">
					Hospital Central Universitario, con domicilio en No. 3302, calle Rosales, Roma Sur, C. P. 31350, Chihuahua, México, teléfono (614)-180-0800, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
				</Paragraph>
				<Subtitle type="bold">
					<h3>¿Para qué fines utilizaremos sus datos personales?</h3>
				</Subtitle>
				<Paragraph type=" align-left">
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
				<Subtitle type="bold">
					<h3>¿Dónde puedo consultar el aviso de privacidad integral?</h3>
				</Subtitle>
				<Paragraph type=" align-left">
					Para conocer mayor información sobre los términos y condiciones en que serán tratados sus datos personales, como los terceros con quienes compartimos su información personal y la forma en que podrá ejercer sus derechos ARCO, puede consultar el aviso de privacidad integral con una petición vía correo electrónico:
				</Paragraph>
				<div className="link">
					<a href="mailto:proyectocovidcuu@gmail.com">
						proyectocovidcuu@gmail.com 
					</a>
				</div>
				<div className="date">
				<p>Fecha de la ultima actualización:</p>
				<div className="date__main">
					<span>30 de jun 2021</span>
				</div>
			</div>
			</Content>
			<Footer />
		</>
	);
}

export { Privacidad };