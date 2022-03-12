import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";

import { Title } from "@components/Title";
import { CardContacto } from '@components/CardContacto';


function HomeContacto() {
	const {
		contactoVisible,
		contacto,
		animateFadeInLeft,
		animateFadeInUp,
		indexText,
	} = useContext(AppContext);

	let contactoTexto = indexText["5"]

	return (
		<section className='wrapper' id='contacto' ref={contacto}>
			<Title type={`main margin align-left ${contactoVisible ? animateFadeInLeft : 'trans'}`}>
				{contactoTexto &&
					<h2 dangerouslySetInnerHTML={{ __html: `${contactoTexto[0]}` }} />
				}
			</Title>

			<div className={`card-wrapper margin ${contactoVisible ? animateFadeInUp : 'trans'}`}>
				{contactoTexto &&
					<>
						{contactoTexto[1].map((item) => (
							<CardContacto
								key={item[0]}
								name={item[0]}
								job={item[1]}
								mail={item[2]}
								urlRed1={item[3]}
								urlRed2={item[4]}
								image={item[5]}
							/>
						))}
					</>
				}
			</div>
		</section>
	);
}

export { HomeContacto };
