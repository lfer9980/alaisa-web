import React from 'react';
import { CardDonativo } from '@components/CardDonativo';

import { Title } from "@components/Title";
import { Paragraph } from "@components/Paragraph";
import { Subtitle } from "@components/Subtitle";

import CoffeeLogo from '@icons/coffee.png';


function HomeDonativos() {
	return (
		<section className="wrapper" id="donativos">
			<Title type="main">
				<h2>
					<span>Ayúdanos</span> a crear más cosas <span>increíbles</span>...
				</h2>
			</Title>
			<Paragraph type="bold">
				Puedes ayudarnos muchísimo, aportando a través de:
			</Paragraph>
			<CardDonativo image={CoffeeLogo} url="buymeacoffee.com" cssName="donativos" />
			<Paragraph type="bold blue">
				Estamos muy agradecidos por tu apoyo.
			</Paragraph>
			<Paragraph type="mini margin">
				Si no puedes donar no te preocupes, la labor que haces cada día como personal de salud es la que hace la diferencia <br /> <b>¡Ustedes son los Héroes!</b>
			</Paragraph>
		</section>
	);
}

export { HomeDonativos };
