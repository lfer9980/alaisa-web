import React from "react";
import { ButtonAncla } from "@components/ButtonAncla"

function CardDonativo({ image, url, cssButton }) {
	return (
		<article className="card--donativo">
				<figure classname="card--donativo__image">
					<img src={image} alt="imagen donativos" />
				</figure>
				<div classname="card--donativo__main">
					<p classname="card--donativo__main__title">¡Invítanos un café!</p>
					<p classname="card--donativo__main__parrafo">Tus aportaciones serán de gran ayuda, gente como tú es capaz de cambiar al mundo...</p>
					<ButtonAncla text="Donar" cssName={cssButton} url={url} />
				</div>
		</article>
	);
}

export { CardDonativo };