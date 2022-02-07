import React from 'react';
import { CardDonativo } from '@components/CardDonativo';

import { Title } from "@components/Title";

import CoffeeLogo from '@icons/coffee.png';

import "@styles/containers/homeDonativos.scss";

function HomeDonativos() {
	return (
		<section className="wrapper" id="donativos">
			<Title type="main" text="Ayúdanos a crear más cosas increíbles..." />	
			<div className="paragraph--bold">
				<p>Puedes ayudarnos muchísimo, aportando a través de:</p>
			</div>
			<div className="paragraph--background">
				<CardDonativo image={CoffeeLogo} url="buymeacoffee.com" cssButton="coffee" cssName="donativos" />
			</div>
			<div className="paragraph--blue">
				<p>Estamos muy agradecidos por tu apoyo. </p>
			</div>
			<div className="paragraph">
				<p>Si no puedes donar no te preocupes, la labor que haces cada día como personal de salud es la que hace la diferencia <br /> <b>¡Ustedes son los Héroes!</b></p>
			</div>
		</section>
	);
}

export { HomeDonativos };
