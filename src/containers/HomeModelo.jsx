import React, { useContext } from 'react';
import { AppContext } from "@context/AppContext";

import { Title } from "@components/Title";
import { Paragraph } from "@components/Paragraph";
import { ButtonGreen } from '@components/ButtonGreen';

function HomeModelo({ modeloTexto }) {
	const {
		modeloVisible,
		modelo,
		animateFadeInUp,
		animateFadeInLeft,
		animateFadeInRight,
	} = useContext(AppContext);

	return (
		<section className='wrapper' id='modelo' ref={modelo}>
			<Title type={`main margin ${modeloVisible ? animateFadeInUp : 'trans'} `}>
				{HomeModelo ?
					(
						<h2 dangerouslySetInnerHTML={{ __html: `${modeloTexto[0]}` }} />
					)
					: (
						<h2>
							<span>ALAISA</span> puede ayudarte a tomar <span>mejores</span> decisiones para el paciente
						</h2>
					)
				}
			</Title>

			<div className="container">
				<Paragraph type={`background margin ${modeloVisible ? animateFadeInLeft : 'trans'}`}>
					{HomeModelo ?
						(
							<p>
								{modeloTexto[1]}
							</p>
						)
						: (
							<p>
								Sobre todo si tienes muchos y tienes que decidir si alguno necesita más atención, recursos o una cama en UCI.
							</p>
						)
					}
				</Paragraph>

				<Paragraph type={`background margin ${modeloVisible ? animateFadeInRight : 'trans'}`}>
					{HomeModelo ?
						(
							<p>
								{modeloTexto[2]}
							</p>
						)
						: (
							<p>
								De hecho, en diferentes estudios se ha visto que los programas como yo llegan a ser más confiables que algunas escalas que usas como <strong>APACHE, qSOFA o CURB-65...</strong> por mencionar algunas.
							</p>
						)
					}
				</Paragraph>

				<Title type="h3">
					{HomeModelo ?
						(
							<h3>
								{modeloTexto[3]}
							</h3>
						)
						: (
							<h3>¡Empieza a utilizar la herramienta!</h3>
						)
					}
				</Title>

				{HomeModelo ?
					(
						<ButtonGreen
							texto={`${modeloTexto[4]}`}
							link="modelo"
							animation={modeloVisible ? animateFadeInUp : 'trans'}
						/>
					)
					: (
						<ButtonGreen
							text="Entrar al modelo"
							link="modelo"
							animation={modeloVisible ? animateFadeInUp : 'trans'}
						/>
					)
				}
			</div>
		</section >
	);
}

export { HomeModelo };
