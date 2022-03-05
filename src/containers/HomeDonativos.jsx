import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";

import { Title } from "@components/Title";
import { Paragraph } from "@components/Paragraph";
import { CardDonativo } from '@components/CardDonativo';

import CoffeeLogo from '@icons/coffee.png';

function HomeDonativos({ donativosTexto }) {
	const {
		donativosVisible,
		donativos,
		animateFadeInRight,
		animateFadeInLeft,
	} = useContext(AppContext);

	return (
		<section className="wrapper" id="donativos" ref={donativos}>
			<Title type={`main margin ${donativosVisible ? animateFadeInRight : 'trans'} `}>
				{donativosTexto ?
					(
						<h2 dangerouslySetInnerHTML={{ __html: `${donativosTexto[0]}` }} />
					)
					: (
						<h2>
							<span>Ayúdanos</span> a crear más cosas <span>increíbles</span>...
						</h2>
					)
				}
			</Title>

			<Paragraph type="bold">
				{donativosTexto ?
					(
						<p>
							{donativosTexto[1]}
						</p>
					)
					: (
						<p>
							Puedes ayudarnos muchísimo, aportando a través de:
						</p>
					)
				}
			</Paragraph>

			{donativosTexto ?
				(
					<CardDonativo
						image={CoffeeLogo}
						url="buymeacoffee.com"
						titulo={donativosTexto[2]}
						parrafo={donativosTexto[3]}
						textoButton={donativosTexto[4]}
						type={`${donativosVisible ? animateFadeInLeft : 'trans'} `}
					/>
				)
				: (
					<CardDonativo
						image={CoffeeLogo}
						url="buymeacoffee.com"
						titulo="¡Invítanos un café!"
						parrafo="Tus aportaciones serán de gran ayuda, gente como tú es capaz de cambiar al mundo..."
						textoButton="Donar"
						type={`${donativosVisible ? animateFadeInLeft : 'trans'} `}
					/>
				)
			}

			<Paragraph type="bold blue">
				{donativosTexto ?
					(
						<p>
							{donativosTexto[5]}
						</p>
					)
					: (
						<p>
							Estamos muy agradecidos por tu apoyo.
						</p>
					)
				}
			</Paragraph>

			<Paragraph type="mini margin">
				{donativosTexto ?
					(
						<p>
							{donativosTexto[6]}
						</p>
					)
					: (
						<p>
							Si no puedes donar no te preocupes, la labor que haces cada día como personal de salud es la que hace la diferencia
						</p>
					)
				}
			</Paragraph>

			<Paragraph type="bold">
				{donativosTexto ?
					(
						<p>
							{donativosTexto[7]}
						</p>
					)
					: (
						<p>
							<b>¡Ustedes son los Héroes!</b>
						</p>
					)
				}
			</Paragraph>
		</section>
	);
}

export { HomeDonativos };
