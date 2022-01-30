import React from "react";
import { Link } from 'react-router-dom';
import BanderaUsa from '@icons/bandera_usa.svg';
import BanderaMx from '@icons/bandera_mx.svg';
import LogoAlaisa from '@icons/logo_tipografico_alaisa.svg';
import IsotipoAlaisa from '@icons/isotipo_alaisa--white.svg';

function Header() {
	return (
		<header>
			<i className="material-icons burger-menu" id="burger-menu">menu</i>
			<div className="header--up">
				<Link to="/">
					<figure className="header--up__logo">
						<img src={LogoAlaisa} alt="logo principal alaisa" />
					</figure>
				</Link>
				<nav className="header--up__nav--desktop">
					<ul className="header__menu--desktop">
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
					</ul>
				</nav>
				<div className="header--up__idioma">
					<span>EN</span>
					<img src={BanderaUsa}/>
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
					<img src={IsotipoAlaisa} alt=" imagen virus Alaisa" />
				</div>
			</div>
		</header>
	);
}

export { Header };