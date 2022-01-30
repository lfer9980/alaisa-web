import React from "react";
import AlaisaWhite from "@icons/imagotipo_alaisa--white.svg";

function Footer() {
	return (
		<footer className="footer section">
			<div className="footer__main">
				<figure>
					<img src={AlaisaWhite} alt="alaisa logo" />
				</figure>
				<div className="footer__main__container">
					<h4>Modelo neuronal Alaisa </h4>
					<p>Un proyecto de Evaluación de las características sociales, demográficas y clínicas de la población de la ciudad de Chihuahua y su posible relación con la enfermedad causada por el SARS-CoV-2.</p>
				</div>
			</div>
			<div className="footer__secondary">
				<div className="footer__inari">
					Desarrollado con <span>HEART</span> por INARI ABS
				</div>
				<ul className="footer__links">
					<li><a href="acerca.html"> Acerca de</a></li>
					<li><a href="privacidad.html"> Aviso de Privacidad</a></li>
				</ul>
			</div>
		</footer>

	);
}

export { Footer };