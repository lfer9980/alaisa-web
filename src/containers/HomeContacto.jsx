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
					Conoce a los contribuidores de este proyecto:
				</h2>
			</Title>
			<div className="card-wrapper">
				<CardContacto 
					name="Alan Hernadez" 
					job="desarrollador" 
					mail="ejemplo@hotmail.com" 
					src={Alan}
					urlRed1={"github.com"} 
					urlRed2={"github.com"} 
					imgRed1={Github} 
					imgRed2={Github} 
				/>
			</div>
		</section>
	);
}

export { HomeContacto };
