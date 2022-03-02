import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";
import { CardContacto } from '@components/CardContacto';
import { Title } from "@components/Title";

import Alan from '@images/alan-dev.jpg';
import Github from '@icons/github.svg'

function HomeContacto() {
	const {
		contactoVisible,
		contacto,
		animateFadeInUp,
		animateFlipInY,
	} = useContext(AppContext);

	return (
		<section className='wrapper' id='contacto' ref={contacto}>
			<Title type={`main margin align-left ${contactoVisible? animateFlipInY : 'trans'}`}>
				<h2>
					Conoce a los <span>contribuidores</span> de este proyecto:
				</h2>
			</Title>
			<div className="card-wrapper margin">
				<CardContacto 
					name="Alan Hernández" 
					job="Desarrollador de la red neuronal Alaisa." 
					mail="alanhernandezgalvan@gmail.com" 
					src={Alan}
					urlRed1={"https://github.com/unlikeghost"} 
					urlRed2={"https://github.com/unlikeghost"} 
					imgRed1={Github} 
					imgRed2={Github} 
				/>
				<CardContacto 
					name="Alan Hernández" 
					job="Desarrollador de la red neuronal Alaisa." 
					mail="alanhernandezgalvan@gmail.com" 
					src={Alan}
					urlRed1={"https://github.com/unlikeghost"} 
					urlRed2={"https://github.com/unlikeghost"} 
					imgRed1={Github} 
					imgRed2={Github} 
				/>
				<CardContacto 
					name="Alan Hernández" 
					job="Desarrollador de la red neuronal Alaisa." 
					mail="alanhernandezgalvan@gmail.com" 
					src={Alan}
					urlRed1={"https://github.com/unlikeghost"} 
					urlRed2={"https://github.com/unlikeghost"} 
					imgRed1={Github} 
					imgRed2={Github} 
				/>
				<CardContacto 
					name="Alan Hernández" 
					job="Desarrollador de la red neuronal Alaisa." 
					mail="alanhernandezgalvan@gmail.com" 
					src={Alan}
					urlRed1={"https://github.com/unlikeghost"} 
					urlRed2={"https://github.com/unlikeghost"} 
					imgRed1={Github} 
					imgRed2={Github} 
				/>
				<CardContacto 
					name="Alan Hernández" 
					job="Desarrollador de la red neuronal Alaisa." 
					mail="alanhernandezgalvan@gmail.com" 
					src={Alan}
					urlRed1={"https://github.com/unlikeghost"} 
					urlRed2={"https://github.com/unlikeghost"} 
					imgRed1={Github} 
					imgRed2={Github} 
				/>
				<CardContacto 
					name="Alan Hernández" 
					job="Desarrollador de la red neuronal Alaisa." 
					mail="alanhernandezgalvan@gmail.com" 
					src={Alan}
					urlRed1={"https://github.com/unlikeghost"} 
					urlRed2={"https://github.com/unlikeghost"} 
					imgRed1={Github} 
					imgRed2={Github} 
				/>
			</div>
		</section>
	);
}

export { HomeContacto };
