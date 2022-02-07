import React from "react";
import { Title } from "@components/Title";


function CardContacto(props) {
	return (
		<article className="card-contacto">
			<div className="card-contacto__main">
				<Title type="p" text={props.name} /> 
				<div className="card-contacto__paragraph">
					<p>{props.job}</p>
				</div>
				<div className="link">
					<a href={`mailto:${props.mail}`}>
					{props.mail}
					</a>
				</div>
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
