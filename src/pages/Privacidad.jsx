import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { Footer } from "@components/Footer";

import { Title } from "@components/Title";


function Privacidad() {
	useDocumentTitle("privacidad")
	return (
		<>
			<Content>
				<Title type="h2" text="Tu privacidad es muy importante y nosotros lo sabemos." />	
				<Title type="h4" text="Consulta nuestro aviso de privacidad" />	
				<div className="paragraph">
					<p>Hospital Central Universitario, con domicilio en No. 3302, calle Rosales, Roma Sur, C. P. 31350, Chihuahua, México, teléfono (614)-180-0800, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:</p>
				</div>
				<div className="paragraph--subtitle">
					<h5>¿Para qué fines utilizaremos sus datos personales?</h5>
				</div>
				<div className="paragraph">
					<p>Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:</p>
				</div>
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
				<div className="paragraph--subtitle">
					<h5>¿Dónde puedo consultar el aviso de privacidad integral?</h5>
				</div>
				<div className="paragraph--bold">
					<p>
						Para conocer mayor información sobre los términos y condiciones en que serán tratados sus datos personales, como los terceros con quienes compartimos su información personal y la forma en que podrá ejercer sus derechos ARCO, puede consultar el aviso de privacidad integral con una petición vía correo electrónico:
					</p>
				</div>
				<div className="link">
					<a href="mailto:proyectocovidcuu@gmail.com">
						proyectocovidcuu@gmail.com 
					</a>
				</div>
				<div className="paragraph--bold">
				<p>Última actualización de este aviso de privacidad: </p>
				</div>
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