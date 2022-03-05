import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "@context/AppContext";

import flagUs from '@icons/flag-us.svg';
import flagMx from '@icons/flag-mx.svg';
import logotypeWhite from '@icons/logotype-white.svg';
import isotypeWhite from '@icons/isotype-white.svg';

function Header({ headerTexto }) {
	const {
		toggleHeaderMobile,
		headerState,
		language,
		toggleLanguage,
	} = useContext(AppContext);

	return (
		<header>
			<i
				onClick={toggleHeaderMobile}
				className="material-icons burger-menu"
				id="burger-menu">
				menu
			</i>
			<div className={`header--up ${headerState ? 'is-active' : ''}`}>
				<Link to="/">
					<figure className="header--up__logo">
						<img src={logotypeWhite} alt="logo principal alaisa" />
					</figure>
				</Link>
				<nav className="header--up__nav--desktop">
					{headerTexto ?
						(
							<>
								{headerTexto["0"].map((item) => (
									<li key={item}>
										<NavLink to={`/${item}`}>
											<span>{item}</span>
										</NavLink>
									</li>
								))}
							</>
						)
						: (
							<>
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
									<NavLink to="/Rendimiento">
										<span>Rendimiento</span>
									</NavLink>
								</li>
								<li>
									<NavLink to="/Donativos">
										<span>Donativos</span>
									</NavLink>
								</li>
								<li>
									<NavLink to="/Contacto">
										<span>Contacto</span>
									</NavLink>
								</li>
								<li>
									<NavLink to="/publicaciones">
										<span>publicaciones</span>
									</NavLink>
								</li>
							</>
						)
					}
				</nav>
				<div
					className="header--up__language"
					onClick={toggleLanguage}
				>
					<span>{language ? 'ES' : 'EN'}</span>
					<img src={language ? flagMx : flagUs} />
				</div>
			</div>
			<div className={`header ${headerState ? 'is-active' : ''}`}>
				<nav className="header__nav--mobile">
					<ul className="header__menu--mobile">
						{headerTexto ?
							(
								<>
								<li onClick={toggleHeaderMobile} >
										<NavLink to="/modelo">
											<span>
												{headerTexto["1"][0]}
											</span>
										</NavLink>
									</li>
									<li onClick={toggleHeaderMobile} >
										<NavLink to="/entrenamiento">
											<span>
												{headerTexto["1"][1]}
											</span>
										</NavLink>
									</li>
									<li onClick={toggleHeaderMobile} >
										<NavLink to="/Rendimiento">
											<span>
												{headerTexto["1"][2]}
											</span>
										</NavLink>
									</li>
									<li onClick={toggleHeaderMobile} >
										<NavLink to="/Donativos">
											<span>
												{headerTexto["1"][3]}
											</span>
										</NavLink>
									</li>
									<li onClick={toggleHeaderMobile} >
										<NavLink to="/Contacto">
											<span>
												{headerTexto["1"][4]}
											</span>
										</NavLink>
									</li>
									<li onClick={toggleHeaderMobile} >
										<NavLink to="/publicaciones">
											<span>
												{headerTexto["1"][5]}
											</span>
										</NavLink>
									</li>
								</>
							)
							: (
								<>
									<li onClick={toggleHeaderMobile} >
										<NavLink to="/modelo">
											<span>Modelo Alaisa</span>
										</NavLink>
									</li>
									<li onClick={toggleHeaderMobile} >
										<NavLink to="/entrenamiento">
											<span>Entrenamiento</span>
										</NavLink>
									</li>
									<li onClick={toggleHeaderMobile} >
										<NavLink to="/Rendimiento">
											<span>Estadisiticas de Rendimiento</span>
										</NavLink>
									</li>
									<li onClick={toggleHeaderMobile} >
										<NavLink to="/Donativos">
											<span>Donativos</span>
										</NavLink>
									</li>
									<li onClick={toggleHeaderMobile} >
										<NavLink to="/Contacto">
											<span>Contacto del equipo</span>
										</NavLink>
									</li>
									<li onClick={toggleHeaderMobile} >
										<NavLink to="/publicaciones">
											<span>publicaciones</span>
										</NavLink>
									</li>
								</>
							)
						}
					</ul>
					<ul className="header__menu--secondary">
						{headerTexto ?
						(
							<>
							{headerTexto["2"].map((item) => (
										<li
											key={item}
											onClick={toggleHeaderMobile}
										>
											<Link to={`/${item}`}>
												<span>
													{item}
												</span>
											</Link>
										</li>
									))}
							</>
						)
						:(
							<>
						<li onClick={toggleHeaderMobile} >
							<Link to="/privacidad">
								<span>Aviso de privacidad</span>
							</Link>
						</li>
						<li onClick={toggleHeaderMobile} >
							<Link to="/acerca">
								<span>Acerca de</span>
							</Link>
						</li>
							</>
						)
						}
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