import React from "react";
import { Link } from 'react-router-dom';
import flagUs from '@icons/flag-us.svg';
import flagMx from '@icons/flag-mx.svg';
import logotypeWhite from '@icons/logotype-white.svg';
import isotypeWhite from '@icons/isotype-white.svg';



function Header() {
	return (
		<header>
			<i className="material-icons burger-menu" id="burger-menu">menu</i>
			<div className="header--up">
				<Link to="/">
					<figure className="header--up__logo">
						<img src={logotypeWhite} alt="logo principal alaisa" />
					</figure>
				</Link>
				<nav className="header--up__nav--desktop">
					<li>
						<Link to="/modelo">
							<span>Modelo</span>
						</Link>
					</li>
					<li>
						<Link to="/entrenamiento">
							<span>Entrenamiento</span>
						</Link>
					</li>
					<li>
						<Link to="/#metricas">
							<span>Rendimiento</span>
						</Link>
					</li>
					<li>
						<Link to="/#donativos">
							<span>Donativos</span>
						</Link>
					</li>
					<li>
						<Link to="/#contacto">
							<span>Contacto</span>
						</Link>
					</li>
					<li>
						<Link to="/publicaciones">
							<span>publicaciones</span>
						</Link>
					</li>
				</nav>
				<div className="header--up__language">
					<span>EN</span>
					<img src={flagUs}/>
				</div>
			</div>
			<div className="header">
				<nav className="header__nav--mobile">
					<ul className="header__menu--mobile">
						<li>
							<Link to="/modelo">
								<span>Modelo Alaisa</span>
							</Link>
						</li>
						<li>
							<Link to="/entrenamiento">
								<span>Entrenamiento</span>
							</Link>
						</li>
						<li>
							<Link to="/#metricas">
								<span>Estadisiticas de Rendimiento</span>
							</Link>
						</li>
						<li>
							<Link to="/#donativos">
								<span>Donativos</span>
							</Link>
						</li>
						<li>
							<Link to="/#contacto">
								<span>Contacto del equipo</span>
							</Link>
						</li>
						<li>
							<Link to="/publicaciones">
								<span>publicaciones</span>
							</Link>
						</li>
					</ul>
					<ul className="header__menu--secondary">
						<li>
							<Link to="/privacidad">
								<span>Aviso de privacidad</span>
							</Link>
						</li>
						<li>
							<Link to="/acerca">
								<span>Acerca de</span>
							</Link>
						</li>
					</ul>
				</nav>
				<div className="imagotipo">
					<img src={isotypeWhite} alt=" imagen virus Alaisa" />
				</div>
			</div>
		</header>
	);
}

export { Header };