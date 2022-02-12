import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "@context/AppContext";

import flagUs from '@icons/flag-us.svg';
import flagMx from '@icons/flag-mx.svg';
import logotypeWhite from '@icons/logotype-white.svg';
import isotypeWhite from '@icons/isotype-white.svg';



function Header() {
		
	const {
		toggleHeaderMobile,
		headerState,
		isActiveClass,
	} = React.useContext(AppContext);

	const isActive = isActiveClass(headerState);

	return (
		<header>
			<i 
				onClick={ toggleHeaderMobile } 
				className="material-icons burger-menu"
				id="burger-menu">
				menu
			</i>
			<div className={`header--up ${isActive}`}>
				<Link to="/">
					<figure className="header--up__logo">
						<img src={logotypeWhite} alt="logo principal alaisa" />
					</figure>
				</Link>
				<nav className="header--up__nav--desktop">
					<li>
						<NavLink to="/modelo">
							<span>Modelo</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/entrenamiento">
							<span>Entrenamiento</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/#metricas">
							<span>Rendimiento</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/#donativos">
							<span>Donativos</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/#contacto">
							<span>Contacto</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/publicaciones">
							<span>publicaciones</span>
						</NavLink>
					</li>
				</nav>
				<div className="header--up__language">
					<span>EN</span>
					<img src={flagUs}/>
				</div>
			</div>
			<div className={`header ${isActive}`}>
				<nav className="header__nav--mobile">
					<ul className="header__menu--mobile">
						<li onClick={ toggleHeaderMobile } >
							<NavLink to="/modelo">
								<span>Modelo Alaisa</span>
							</NavLink>
						</li>
						<li onClick={ toggleHeaderMobile } >
							<NavLink to="/entrenamiento">
								<span>Entrenamiento</span>
							</NavLink>
						</li>
						<li onClick={ toggleHeaderMobile } >
							<NavLink to="/#metricas">
								<span>Estadisiticas de Rendimiento</span>
							</NavLink>
						</li>
						<li onClick={ toggleHeaderMobile } >
							<NavLink to="/#donativos">
								<span>Donativos</span>
							</NavLink>
						</li>
						<li onClick={ toggleHeaderMobile } >
							<NavLink to="/#contacto">
								<span>Contacto del equipo</span>
							</NavLink>
						</li>
						<li	onClick={ toggleHeaderMobile } >
							<NavLink to="/publicaciones">
								<span>publicaciones</span>
							</NavLink>
						</li>
					</ul>
					<ul className="header__menu--secondary">
						<li	onClick={ toggleHeaderMobile } >
							<Link to="/privacidad">
								<span>Aviso de privacidad</span>
							</Link>
						</li>
						<li	onClick={ toggleHeaderMobile } >
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