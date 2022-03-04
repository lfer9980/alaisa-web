import React from "react";
import { ButtonAncla } from "@components/ButtonAncla"

function CardDonativo({ titulo, parrafo, textoButton, image, url }) {
	return (
		<article className="card-donativo margin">
			<figure className="card-donativo__image">
				<img src={image} alt="imagen donativos" />
			</figure>
			<div className="card-donativo__main">
				<p className="card-donativo__title">
					{titulo}
				</p>
				<p className="card-donativo__paragraph">
					{parrafo}
				</p>
				<ButtonAncla
					texto={textoButton}
					cssName="donativos"
					url={url}
				/>
			</div>
		</article>
	);
}

export { CardDonativo };