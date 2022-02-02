import React from 'react';
import { ButtonGreen } from '@components/ButtonGreen';

function HomeModelo() {
	return (
		<section className='wrapper' id='modelo'>
			<div>
				<div className="title-main">
					<h2>
						<span>Alaisa</span> puede ayudarte a tomar <span>mejores</span> decisiones para el paciente
					</h2>
				</div>
				<div className="container">
					<div className="paragraph--background">
						<p>Sobre todo si tienes muchos y tienes que decidir si alguno necesita más atención, recursos o una cama en UCI.</p>
					</div>
					<div className="paragraph--background">
						<p>
							De hecho, en diferentes estudios se ha visto que los programas como yo llegan a ser más confiables que algunas escalas que usas como <strong>APACHE, qSOFA o CURB-65...</strong> por mencionar algunas.
						</p>
					</div>
					<div className="title-h3">
						<h3>
							¡Empieza a utilizar la herramienta!
						</h3>
					</div>
					<ButtonGreen text="Entrar al modelo" link="modelo" />
				</div>
			</div>

		</section>
	);
}

export { HomeModelo };
