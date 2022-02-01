import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Footer } from "@components/Footer";


function Privacidad() {
	useDocumentTitle("privacidad")
	return (
		<>
			<main className="privacidad">
				<div className="privacidad__title">
					<h2>Tu privacidad es muy <span>importante</span> y nosotros lo sabemos.</h2>
				</div>
				<section className="privacidad__main">
					<div className="privacidad__main__subtitle--main">
						<h4>Consulta nuestro aviso de privacidad</h4>
					</div>
					<div className="privacidad__main__parrafo">
						<p>Hospital Central Universitario, con domicilio en No. 3302, calle Rosales, Roma Sur, C. P. 31350, Chihuahua, México, teléfono (614)-180-0800, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:</p>
					</div>
					<div className="privacidad__main__subtitle">
						<h5>¿Para qué fines utilizaremos sus datos personales?</h5>
					</div>
					<div className="privacidad__main__parrafo">
						<p>Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:</p>
					</div>
					<ul className="privacidad__main__list">
						<li>Respuesta a mensajes del formulario de contacto.</li>
						<li>Prestación de cualquier servicio solicitado.</li>
						<li>Registro epidemiológico.</li>
						<li>Investigación científica con fines estadísticos.</li>
					</ul>
					<h5 className="privacidad__main__subtitle">¿Dónde puedo consultar el aviso de privacidad integral?</h5>
					<p className="privacidad__main__parrafo">Para conocer mayor información sobre los términos y condiciones en que serán tratados sus datos personales, como los terceros con quienes compartimos su información personal y la forma en que podrá ejercer sus derechos ARCO, puede consultar el aviso de privacidad integral con una petición vía correo electrónico:</p>
					<div className="mail"><a href="mailto:proyectocovidcuu@gmail.com">proyectocovidcuu@gmail.com </a></div>
				</section>
				<div className="fecha">
					<p>Última actualización de este aviso de privacidad: </p>
					<div className="fecha__main"><span>30 de jun 2021</span></div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export { Privacidad };