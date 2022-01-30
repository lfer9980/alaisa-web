import React from 'react';
import { ButtonGreen } from '@components/ButtonGreen';

function HomeModelo({ children }) {
	return (
		<section className='modelo wrapper section' id='modelo'>
			<div>
				<div classname="modelo__title trans">
					<h2>
						<span>Alaisa</span> puede ayudarte a tomar <span>mejores</span> decisiones para el paciente
					</h2>
				</div>
				<div classname="modelo__main">
					<div classname="modelo__main__parrafo one trans">
						<p>Sobre todo si tienes muchos y tienes que decidir si alguno necesita más atención, recursos o una cama en UCI.</p>
					</div>
					<div classname="modelo__main__parrafo two trans">
						<p>
							De hecho, en diferentes estudios se ha visto que los programas como yo llegan a ser más confiables que algunas escalas que usas como <strong>APACHE, qSOFA o CURB-65...</strong> por mencionar algunas.
						</p>
					</div>
					<div classname="modelo__main__subtitle">
						<p>
							¡Empieza a utilizar la herramienta!
						</p>
					</div>
					<ButtonGreen text="Entrar al modelo" link="modelo">
					</ButtonGreen></div>
			</div>

		</section>
	);
}

export { HomeModelo };
