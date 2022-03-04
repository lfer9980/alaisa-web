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
	} = useContext(AppContext);

	return (
		<section className="wrapper" id="donativos" ref={donativos}>
			{donativosTexto ?
				(
					<>
						<Title type={`main margin ${donativosVisible ? animateFadeInRight : 'trans'} `}>
							<h2 dangerouslySetInnerHTML={{ __html: `${donativosTexto[0]}` }} />
						</Title>
						<Paragraph type="bold">
							<p>
								{donativosTexto[1]}
							</p>
						</Paragraph>
						<CardDonativo
							image={CoffeeLogo}
							url="buymeacoffee.com"
							cssName="donativos"
							titulo={donativosTexto[2]}
							parrafo={donativosTexto[3]}
							textoButton={donativosTexto[4]}
						/>
						<Paragraph type="bold blue">
							<p>
								{donativosTexto[5]}
							</p>
						</Paragraph>
						<Paragraph type="mini margin">
							<p>
								{donativosTexto[6]}
							</p>
						</Paragraph>
					</>
				)
				: (
					<>
						<Title type={`main margin ${donativosVisible ? animateFadeInRight : 'trans'} `}>
							<h2>
								<span>Ayúdanos</span> a crear más cosas <span>increíbles</span>...
							</h2>
						</Title>
						<Paragraph type="bold">
							<p>
								Puedes ayudarnos muchísimo, aportando a través de:
							</p>
						</Paragraph>
						<CardDonativo
							image={CoffeeLogo}
							url="buymeacoffee.com"
							cssName="donativos"
							titulo="¡Invítanos un café!"
							parrafo="Tus aportaciones serán de gran ayuda, gente como tú es capaz de cambiar al mundo..."
							textoButton="Donar"
						/>
						<Paragraph type="bold blue">
							<p>
								Estamos muy agradecidos por tu apoyo.
							</p>
						</Paragraph>
						<Paragraph type="mini margin">
							<p>
								Si no puedes donar no te preocupes, la labor que haces cada día como personal de salud es la que hace la diferencia <br /> <b>¡Ustedes son los Héroes!</b>
							</p>
						</Paragraph>
					</>
				)}
		</section>
	);
}

export { HomeDonativos };
