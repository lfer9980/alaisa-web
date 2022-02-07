import React from 'react';
import Alan from '@images/alan-dev.jpg';
import Github from '@icons/github.svg'
import { CardContacto } from '@components/CardContacto';

import { Title } from "@components/Title";

import "@styles/containers/homeContacto.scss";

function HomeContacto() {
	return (
		<section className='wrapper' id='contacto'>
			<Title type="main" text="Conoce a los contribuidores de este proyecto:" />	
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
