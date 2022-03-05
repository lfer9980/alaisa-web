import React from "react";
import { Title } from "@components/Title";
import { Paragraph } from "@components/Paragraph";
import { LinkAnchor } from "@components/LinkAnchor";

import github from '@icons/github.svg'
import linkedin from '@icons/linkedin.svg'

function CardContacto({ name, job, mail, urlRed1, urlRed2, image }) {

	/* logica para seleccionar imagen red social  */
	const nameOfSocialMedia = (url) => {
		if(url.includes("github")) {
			return github
		}
		if(url.includes("linkedin")) {
			return linkedin
		}
		return
	}
	
	return (
		<article className="card-contacto">
			<div className="card-contacto__main">
				<Title type="h4">
					<h4>
						{name}
					</h4>
				</Title>
				<Paragraph type="info">
					{job}
				</Paragraph>
				<LinkAnchor type="mail" href={`mailto:${mail}`} >
					{mail}
				</LinkAnchor>
				<div className="card-contacto__media">
					{urlRed1 &&
						<a href={urlRed1}>
							<img 
								src={nameOfSocialMedia(urlRed1)} 
								alt="red social del contribuidor" 
								/>
						</a>
					}
					{urlRed2 &&
						<a href={urlRed2}>
							<img 
								src={nameOfSocialMedia(urlRed2)} 
								alt="red social del contribuidor" 
								/>
						</a>
					}
				</div>
			</div>
			<div className="card-contacto__image">
				<img src={image} at="imagen del contribuidor" />
			</div>
		</article>
	);
}

export { CardContacto };
