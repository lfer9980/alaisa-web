import React from "react";
import isologotypeWhite from "@icons/isologotype-white.svg";
import { Link } from "react-router-dom";


function Footer() {
	return (
		<footer className="footer">
			<div className="footer__main">
				<Link to="/modelo">
					<figure>
						<img src={isologotypeWhite} alt="alaisa logo" />
					</figure>
				</Link>
				<div className="footer__main__container">
					<h4>Modelo neuronal Alaisa </h4>
					<p>Un proyecto de Evaluación de las características sociales, demográficas y clínicas de la población de la ciudad de Chihuahua y su posible relación con la enfermedad causada por el SARS-CoV-2.</p>
				</div>
			</div>
			<div className="footer__secondary">
				<div className="footer__inari">
					<p>
						Desarrollado con 
						<span className="heart"></span> 
						por INARI ABS
					</p>
				</div>
				<ul className="footer__links">
					<li>
						<Link to="/acerca">
								<span> Acerca de</span>
						</Link>
					</li>
					<li>
						<Link to="/privacidad">
							<span> Aviso de Privacidad</span>
						</Link>
					</li>
				</ul>
			</div>
		</footer>

	);
}

export { Footer };