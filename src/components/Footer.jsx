import React from "react";
import isologotypeWhite from "@icons/isologotype-white.svg";
import { Link } from "react-router-dom";


function Footer({ footerTexto }) {
	return (
		<footer className="footer">
			<div className="footer__main">
				<Link to="/">
					<figure>
						<img src={isologotypeWhite} alt="alaisa logo" />
					</figure>
				</Link>
				<div className="footer__main__container">
					{footerTexto ?
						(
							<>
								<h4>
									{footerTexto[0]}
								</h4>
								<p>
									{footerTexto[1]}
								</p>
							</>
						)
						: (
							<>
								<h4>
									Modelo neuronal Alaisa
								</h4>
								<p>
									Un proyecto de Evaluación de las características sociales, demográficas y clínicas de la población de la ciudad de Chihuahua y su posible relación con la enfermedad causada por el SARS-CoV-2.
								</p>
							</>
						)}
				</div>
			</div>
			<div className="footer__secondary">
				<div className="footer__inari">
					{footerTexto ?
						(
							<p dangerouslySetInnerHTML={{ __html: `${footerTexto[2]}` }} />
						)
						: (
							<p>
								Desarrollado con
								<span className="heart"></span>
								por AsBio
							</p>
						)
					}
				</div>
				<ul className="footer__links">
					{footerTexto ?
						(
							<>
								<li>
									<Link to="/acerca">
										<span> 
											{footerTexto[3]}
										</span>
									</Link>
								</li>
								<li>
									<Link to="/privacidad">
										<span>
											{footerTexto[4]}
										</span>
									</Link>
								</li>
							</>
						)
						: (
							<>
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
							</>
						)
					}
				</ul>
			</div>
		</footer>
	);
}

export { Footer };