import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";
import { ButtonGreen } from "@components/ButtonGreen";
import { Title } from "@components/Title";
import { Paragraph } from "@components/Paragraph";
import { Subtitle } from "@components/Subtitle";

function HomeHero() {
	const {
		text,
		heroVisible,
		hero,
		animateFadeInUp,
		animateFadeInLeft,
	} = useContext(AppContext);

	const heroText = text[0];

	return (
		<section className="wrapper" id="hero" ref={hero}>
			<Title type={`h1 margin ${heroVisible? animateFadeInLeft : 'trans' }`}>
				<h1 dangerouslySetInnerHTML={{__html:`${heroText[0]}`}}>
				</h1>
			</Title>
			<Subtitle type="background">
				<h2>
					{heroText[1]}
				</h2>
			</Subtitle>
			<Subtitle type="bold margin">
				<h3>
					{heroText[2]}
				</h3>
			</Subtitle>
			<Paragraph type="rounded margin">
				<p  dangerouslySetInnerHTML={{__html:`${heroText[3]}`}}/>
			</Paragraph>
			<ButtonGreen 
				text={heroText[4]}
				link="modelo" 
				animation={`${heroVisible? animateFadeInUp : 'trans' }`}
			/>
			<div className="inari">
				<p dangerouslySetInnerHTML={{__html:`${heroText[5]}`}}/>
			</div>
		</section>
	);
}

export { HomeHero };
