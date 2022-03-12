import React, { useContext } from 'react';
import { AppContext } from "@context/AppContext";

import { Title } from "@components/Title";
import { Paragraph } from "@components/Paragraph";
import { ButtonGreen } from '@components/ButtonGreen';

function HomeModelo() {
	const {
		modeloVisible,
		modelo,
		animateFadeInUp,
		animateFadeInLeft,
		animateFadeInRight,
		indexText
	} = useContext(AppContext);

	let modeloTexto = indexText["1"]

	return (
		<section className='wrapper' id='modelo' ref={modelo}>
			<Title type={`main margin ${modeloVisible ? animateFadeInUp : 'trans'} `}>
				{HomeModelo &&
					<h2 dangerouslySetInnerHTML={{ __html: `${modeloTexto[0]}` }} />
				}
			</Title>

			<div className="container">
				<Paragraph type={`background margin ${modeloVisible ? animateFadeInLeft : 'trans'}`}>
					{HomeModelo &&
						<p>
							{modeloTexto[1]}
						</p>
					}
				</Paragraph>

				<Paragraph type={`background margin ${modeloVisible ? animateFadeInRight : 'trans'}`}>
					{HomeModelo &&
						<p>
							{modeloTexto[2]}
						</p>
					}
				</Paragraph>

				<Title type="h3">
					{HomeModelo &&
						<h3>
							{modeloTexto[3]}
						</h3>
					}
				</Title>

				{HomeModelo &&
					<ButtonGreen
						texto={`${modeloTexto[4]}`}
						link="modelo"
						animation={modeloVisible ? animateFadeInUp : 'trans'}
					/>
				}
			</div>
		</section >
	);
}

export { HomeModelo };
