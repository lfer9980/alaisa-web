import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";

import { Title } from "@components/Title";
import { Paragraph } from "@components/Paragraph";
import { Subtitle } from "@components/Subtitle";
import { ButtonGreen } from "@components/ButtonGreen";

function HomeHero() {
	const {
		heroVisible,
		hero,
		animateFadeInUp,
		animateFadeInLeft,
		indexText
	} = useContext(AppContext);

	let heroTexto = indexText["0"]

	return (
		<section className="wrapper" id="hero" ref={hero}>
			<Title type={`h1 margin ${heroVisible ? animateFadeInLeft : 'trans'}`}>
				{heroTexto &&
					<h1 dangerouslySetInnerHTML={{ __html: `${heroTexto[0]}` }} />
				}
			</Title>

			<Subtitle type="background">
				{heroTexto &&
					<h2>
						{heroTexto[1]}
					</h2>
				}
			</Subtitle>

			<Subtitle type="bold margin">
				{heroTexto &&
					<h3>
						{heroTexto[2]}
					</h3>
				}
			</Subtitle>

			<Paragraph type="rounded margin">
				{heroTexto &&
					<p dangerouslySetInnerHTML={{ __html: `${heroTexto[3]}` }} />
				}
			</Paragraph>

			{heroTexto &&
				<>
					<ButtonGreen
						texto={`${heroTexto[4]}`}
						link="modelo"
						animation={heroVisible ? animateFadeInUp : 'trans'}
					/>
				</>
			}

			<div className="inari">
				{heroTexto &&
					<p dangerouslySetInnerHTML={{ __html: `${heroTexto[5]}` }} />
				}
			</div>
		</section>
	);
}

export { HomeHero };
