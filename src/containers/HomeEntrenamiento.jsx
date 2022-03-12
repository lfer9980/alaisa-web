import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";

import { Title } from "@components/Title";
import { Paragraph } from "@components/Paragraph";
import { Subtitle } from "@components/Subtitle";
import { ButtonGreen } from '@components/ButtonGreen';

function HomeEntrenamiento() {
	const {
		entrenamientoVisible,
		entrenamiento,
		animateFadeInUp,
		indexText,
	} = useContext(AppContext);

	let trainTexto = indexText["2"]

	return (
		<section className="wrapper" id="entrenamiento" ref={entrenamiento}>
			<Title type={`main margin ${entrenamientoVisible ? animateFadeInUp : 'trans'} `}>
				{trainTexto &&
					<h2 dangerouslySetInnerHTML={{ __html: `${trainTexto[0]}` }} />
				}
			</Title>

			<div className="container margin">
				<Subtitle type="">
					{trainTexto &&
						<p dangerouslySetInnerHTML={{ __html: `${trainTexto[1]}` }} />
					}
				</Subtitle>

				<Paragraph type="">
					{trainTexto &&
						<p dangerouslySetInnerHTML={{ __html: `${trainTexto[2]}` }} />
					}
				</Paragraph>

				<Paragraph type="bold">
					{trainTexto &&
						<p dangerouslySetInnerHTML={{ __html: `${trainTexto[3]}` }} />
					}
				</Paragraph>

				<Paragraph type="">
					{trainTexto &&
						<p dangerouslySetInnerHTML={{ __html: `${trainTexto[4]}` }} />
					}
				</Paragraph>

				{trainTexto &&
					<ButtonGreen
						texto={`${trainTexto[5]}`}
						link="entrenamiento"
						animation={entrenamientoVisible ? animateFadeInUp : 'trans'}
					/>
				}
			</div>
		</section>
	);
}

export { HomeEntrenamiento };
