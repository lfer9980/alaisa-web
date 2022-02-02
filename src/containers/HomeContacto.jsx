import React from 'react';
import Alan from '@images/alan-dev.jpg';
import Github from '@icons/github_logo.svg'
import { CardContacto } from '@components/CardContacto';

function HomeContacto() {
	return (
		<section className='wrapper' id='contacto'>
			<div className="title-main">
				<h2>
					Conoce a los <span>contribuidores</span> de este proyecto:
				</h2>
			</div>
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
