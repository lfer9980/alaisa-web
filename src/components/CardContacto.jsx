import React from "react";
import { Title } from "@components/Title";
import { Paragraph } from "@components/Paragraph";
import { LinkAnchor } from "@components/LinkAnchor";

function CardContacto({urlRed1, urlRed2, imgRed1, imgRed2, imgContribuidor}) {
	return (
		<article className="card-contacto">
			<div className="card-contacto__main">
				<Title type="h4">
					<h4>
					</h4>
				</Title>
				<Paragraph type="info">
				</Paragraph>
				<LinkAnchor type="mail" href={`mailto:`} >
				</LinkAnchor>
				<div className="card-contacto__media">
					<a href={`https://${urlRed1}`}>
						<img src={`${imgRed1}`} alt="red social del contribuidor"/>
					</a>
					{
						urlRed2 &&
						<a href={`https://${urlRed2}`}>
							<img src={imgRed2} alt="red social del contribuidor"/> 
						</a>
					}
				</div>
			</div>
			<div className="card-contacto__image">
				<img src={imgContribuidor} at= "imagen del contribuidor"/>
			</div>
		</article>
	);
}

export { CardContacto };
