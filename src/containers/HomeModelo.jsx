import React from 'react';
import { ButtonGreen } from '@components/ButtonGreen';
import { Title } from "@components/Title";

import "@styles/containers/homeModelo.scss";

function HomeModelo() {
	return (
		<section className='wrapper' id='modelo'>
			<div>
				<Title type="main" text="Alaisa puede ayudarte a tomar mejores decisiones para el paciente" />	
				<div className="container">
					<div className="paragraph--background">
						<p>Sobre todo si tienes muchos y tienes que decidir si alguno necesita más atención, recursos o una cama en UCI.</p>
					</div>
					<div className="paragraph--background">
						<p>
							De hecho, en diferentes estudios se ha visto que los programas como yo llegan a ser más confiables que algunas escalas que usas como <strong>APACHE, qSOFA o CURB-65...</strong> por mencionar algunas.
						</p>
					</div>
					<Title type="h3" text="¡Empieza a utilizar la herramienta!"/>
					<ButtonGreen text="Entrar al modelo" link="modelo" />
				</div>
			</div>

		</section>
	);
}

export { HomeModelo };
