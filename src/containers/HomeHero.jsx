import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";
import { Title } from "@components/Title";
import { Paragraph } from "@components/Paragraph";
import { Subtitle } from "@components/Subtitle";
import { ButtonGreen } from "@components/ButtonGreen";

function HomeHero({ heroTexto }) {
	const {
		heroVisible,
		hero,
		animateFadeInUp,
		animateFadeInLeft,
	} = useContext(AppContext);

	return (
		<section className="wrapper" id="hero" ref={hero}>
			{heroTexto ?
				(<>
					<Title type={`h1 margin ${heroVisible ? animateFadeInLeft : 'trans'}`}>
						<h1 dangerouslySetInnerHTML={{ __html: `${heroTexto[0]}` }}/>
					</Title>
					<Subtitle type="background">
						<h2>
							{heroTexto[1]}
						</h2>
					</Subtitle>
					<Subtitle type="bold margin">
						<h3>
							{heroTexto[2]}
						</h3>
					</Subtitle>
					<Paragraph type="rounded margin">
						<p dangerouslySetInnerHTML={{ __html: `${heroTexto[3]}` }} />
					</Paragraph>
					<ButtonGreen
						texto={`${heroTexto[4]}`}
						link="modelo"
						animation={heroVisible ? animateFadeInUp : 'trans'}
					/>
					<div className="inari">
						<p dangerouslySetInnerHTML={{ __html: `${heroTexto[5]}` }} />
					</div>
				</>
				)
				: (
					<>
						<Title type={`h1 margin ${heroVisible ? animateFadeInLeft : 'trans'}`}>
							<h1>
								Evaluación
								<br />
								<span> efectiva </span>del COVID-19 con tecnología en <span>CUU</span>
								.
							</h1>
						</Title>
						<Subtitle type="background">
							<h2>¡Hola! Soy ALAISA</h2>
						</Subtitle>
						<Subtitle type="bold margin">
							<h3>Fui creado con la idea de ayudar en los hospitales.</h3>
						</Subtitle>
						<Paragraph type="rounded margin">
							Me enseñaron a identificar características en los personas con
							<strong> COVID-19</strong> para saber si los pacientes tienen más
							posibilidades de darse de alta o de fallecer por esta enfermedad.
						</Paragraph>
						<ButtonGreen
							texto="Comienza aquí"
							link="modelo"
							animation={heroVisible ? animateFadeInUp : 'trans'}
						/>
						<div className="inari">
							<p>
								Desarrollado con
								<span className="heart"></span>
								por AsBio
							</p>
						</div>
					</>
				)}
		</section>
	);
}

export { HomeHero };
