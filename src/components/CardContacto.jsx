import React from "react";
import { Title } from "@components/Title";
import { Paragraph } from "@components/Paragraph";
import { Subtitle } from "@components/Subtitle";
import { LinkAnchor } from "@components/LinkAnchor";


function CardContacto(props) {
	return (
		<article className="card-contacto">
			<div className="card-contacto__main">
				<Title type="h4">
					<h4>
						{props.name}
					</h4>
				</Title>
				<Paragraph type="info">
					{props.job}
				</Paragraph>
				<LinkAnchor type="mail" href={`mailto:${props.mail}`} >
					{props.mail}
				</LinkAnchor>
				<div className="card-contacto__media">
					<a href={`https://${props.urlRed1}`}>
						<img src={props.imgRed1} alt="red social del contribuidor"/>
					</a>
					<a href={`https://${props.urlRed2}`}>
						<img src={props.imgRed2} alt="red social del contribuidor"/> 
					</a>
				</div>
			</div>
			<div className="card-contacto__image">
				<img src={props.src} at= "imagen del contribuidor"/>
			</div>
		</article>
	);
}

export { CardContacto };
