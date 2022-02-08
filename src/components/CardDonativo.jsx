import React from "react";
import { ButtonAncla } from "@components/ButtonAncla"



function CardDonativo({ image, url }) {
	return (
		<article className="card-donativo margin">
				<figure className="card-donativo__image">
					<img src={image} alt="imagen donativos" />
				</figure>
				<div className="card-donativo__main">
					<p className="card-donativo__title">¡Invítanos un café!</p>
					<p className="card-donativo__paragraph">Tus aportaciones serán de gran ayuda, gente como tú es capaz de cambiar al mundo...</p>
					<ButtonAncla text="Donar" cssName="donativos" url={url} />
				</div>
		</article>
	);
}

export { CardDonativo };