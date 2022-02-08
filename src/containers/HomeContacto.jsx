import React from 'react';
import Alan from '@images/alan-dev.jpg';
import Github from '@icons/github.svg'
import { CardContacto } from '@components/CardContacto';

import { Title } from "@components/Title";



function HomeContacto() {
	return (
		<section className='wrapper' id='contacto'>
			<Title type="main">
				<h2>
					Conoce a los <span>contribuidores</span> de este proyecto:
				</h2>
			</Title>
			<div className="card-wrapper">
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
