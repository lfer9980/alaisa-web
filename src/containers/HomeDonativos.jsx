import React from 'react';
import { CardDonativo } from '@components/CardDonativo';
import CoffeeLogo from '@icons/coffee_logo.png';

function HomeDonativos({ children }) {
	return (
		<section classname="donativos wrapper section" id="donativos">
			<div classname="donativos__title trans">
				<h2><span>Ayúdanos</span> a crear más cosas <span>increíbles</span>...</h2>
			</div>
			<div classname="donativos__parrafo1">
				<p>Puedes ayudarnos muchísimo, aportando a través de:</p>
			</div>
			<div classname="donativos--wrapper">
				<CardDonativo image={CoffeeLogo} url="buymeacoffee.com" cssButton="coffee" cssName="donativos" />
			</div>
			<div classname="donativos__parrafo2">
				<p>Estamos muy agradecidos por tu apoyo. </p>
			</div>
			<div classname="donativos__parrafo3">
				<p>Si no puedes donar no te preocupes, la labor que haces cada día como personal de salud es la que hace la diferencia <br /> <b>¡Ustedes son los Héroes!</b></p>
			</div>
		</section>
	);
}

export { HomeDonativos };
