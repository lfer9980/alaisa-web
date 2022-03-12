import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "@context/AppContext";

import flagUs from '@icons/flag-us.png';
import flagMx from '@icons/flag-mx.png';
import logotypeWhite from '@icons/logotype-white.svg';
import isotypeWhite from '@icons/isotype-white.svg';


function Header() {
	const {
		toggleHeaderMobile,
		headerState,
		language,
		toggleLanguage,
		headerText,
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
					{headerText &&
						<>
							<li>
								<NavLink to="/modelo">
									<span>
										{headerText["0"][0]}
									</span>
								</NavLink>
							</li>
							<li>
								<NavLink to="/entrenamiento">
									<span>
										{headerText["0"][1]}
									</span>
								</NavLink>
							</li>
							<li>
								<NavLink to="/Rendimiento">
									<span>
										{headerText["0"][2]}
									</span>
								</NavLink>
							</li>
							<li>
								<NavLink to="/Donativos">
									<span>
										{headerText["0"][3]}
									</span>
								</NavLink>
							</li>
							<li>
								<NavLink to="/Contacto">
									<span>
										{headerText["0"][4]}
									</span>
								</NavLink>
							</li>
							<li>
								<NavLink to="/publicaciones">
									<span>
										{headerText["0"][5]}
									</span>
								</NavLink>
							</li>
						</>
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
						{headerText &&
							<>
								<li onClick={toggleHeaderMobile} >
									<NavLink to="/modelo">
										<span>
											{headerText["1"][0]}
										</span>
									</NavLink>
								</li>
								<li onClick={toggleHeaderMobile} >
									<NavLink to="/entrenamiento">
										<span>
											{headerText["1"][1]}
										</span>
									</NavLink>
								</li>
								<li onClick={toggleHeaderMobile} >
									<NavLink to="/Rendimiento">
										<span>
											{headerText["1"][2]}
										</span>
									</NavLink>
								</li>
								<li onClick={toggleHeaderMobile} >
									<NavLink to="/Donativos">
										<span>
											{headerText["1"][3]}
										</span>
									</NavLink>
								</li>
								<li onClick={toggleHeaderMobile} >
									<NavLink to="/Contacto">
										<span>
											{headerText["1"][4]}
										</span>
									</NavLink>
								</li>
								<li onClick={toggleHeaderMobile} >
									<NavLink to="/publicaciones">
										<span>
											{headerText["1"][5]}
										</span>
									</NavLink>
								</li>
							</>
						}
					</ul>
					<ul className="header__menu--secondary">
						{headerText &&
							<>
								<li onClick={toggleHeaderMobile} >
									<Link to="/privacidad">
										<span>
											{headerText["2"][0]}
										</span>
									</Link>
								</li>
								<li onClick={toggleHeaderMobile} >
									<Link to="/acerca">
										<span>
											{headerText["2"][1]}
										</span>
									</Link>
								</li>
							</>
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