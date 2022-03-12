import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";

import { Title } from "@components/Title";
import { Paragraph } from "@components/Paragraph";
import { CardDonativo } from '@components/CardDonativo';

import CoffeeLogo from '@icons/coffee.png';

function HomeDonativos() {
	const {
		donativosVisible,
		donativos,
		animateFadeInRight,
		animateFadeInLeft,
		indexText,
	} = useContext(AppContext);

	let donativosTexto = indexText["4"]

	return (
		<section className="wrapper" id="donativos" ref={donativos}>
			<Title type={`main margin ${donativosVisible ? animateFadeInRight : 'trans'} `}>
				{donativosTexto &&
					<h2 dangerouslySetInnerHTML={{ __html: `${donativosTexto[0]}` }} />
				}
			</Title>

			<Paragraph type="bold">
				{donativosTexto &&
					<p>
						{donativosTexto[1]}
					</p>
				}
			</Paragraph>

			{donativosTexto &&
				<CardDonativo
					image={CoffeeLogo}
					url="buymeacoffee.com"
					titulo={donativosTexto[2]}
					parrafo={donativosTexto[3]}
					textoButton={donativosTexto[4]}
					type={`${donativosVisible ? animateFadeInLeft : 'trans'} `}
				/>
			}

			<Paragraph type="bold blue">
				{donativosTexto &&
					<p>
						{donativosTexto[5]}
					</p>
				}
			</Paragraph>

			<Paragraph type="mini margin">
				{donativosTexto &&
					<p>
						{donativosTexto[6]}
					</p>
				}
			</Paragraph>

			<Paragraph type="bold">
				{donativosTexto &&
					<p>
						{donativosTexto[7]}
					</p>
				}
			</Paragraph>
		</section>
	);
}

export { HomeDonativos };
