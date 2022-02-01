import React from "react";

function CardContacto(props) {
	return (
		<article className="card--contacto transContacto--single">
			<div className="card--contacto__main">
				<div className="card--contacto__title">
					<p>{props.name}</p>
				</div>
				<div className="card--contacto__parrafo">
					<p>{props.job}</p>
				</div>
				<div className="card--contacto__correo">
					<a href={`mailto:${props.mail}`}>
					{props.mail}
					</a>
				</div>
				<div className="card--contacto__redes">
					<a href={`https://${props.urlRed1}`}>
						<img src={props.imgRed1} alt="red social del contribuidor"/>
					</a>
					<a href={`https://${props.urlRed2}`}>
						<img src={props.imgRed2} alt="red social del contribuidor"/> 
					</a>
				</div>
			</div>
			<div className="card--contacto__image">
				<img src={props.src} at= "imagen del contribuidor"/>
			</div>
		</article>
	);
}

export { CardContacto };
