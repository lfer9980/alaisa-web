import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";
import { CardContacto } from '@components/CardContacto';
import { Title } from "@components/Title";


function HomeContacto({ contactoTexto }) {
	const {
		contactoVisible,
		contacto,
		animateFlipInY,
	} = useContext(AppContext);

	return (
		<section className='wrapper' id='contacto' ref={contacto}>
			<Title type={`main margin align-left ${contactoVisible ? animateFlipInY : 'trans'}`}>
				{contactoTexto ?
					(
						<h2 dangerouslySetInnerHTML={{ __html: `${contactoTexto[0]}` }} />
					)
					: (
						<h2>
							Conoce a los <span>contribuidores</span> de este proyecto:
						</h2>
					)
				}
			</Title>

			<div className="card-wrapper margin">
				{contactoTexto ?
					(
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

					)
					: (
						<>
							<CardContacto
								name="Dr. Luis Enriquez"
								job="Project manager"
								mail="investigacionhcu@gmail.com"
								urlRed1={""}
								urlRed2={""}
								image="luis-enriquez"
							/>
							<CardContacto
								name="Alan Hernández"
								job="Desarrollador de la red neuronal Alaisa."
								mail="alanhernandezgalvan@gmail.com"
								urlRed1="https://www.linkedin.com/in/jesusalanhernandezgalvan/"
								urlRed2="https://github.com/unlikeghost"
								image="alan-hernandez"
							/>
							<CardContacto
								name="Luis Fernández"
								job="Diseñador de la interfaz y frontend"
								mail="luis.fer9980@gmail.com"
								urlRed1="https://www.linkedin.com/in/lfer9980/"
								urlRed2="https://github.com/lfer9980"
								image="luis-hernandez"
							/>
							<CardContacto
								name="María Saad"
								job="Planeación y recolección de información"
								mail="mariasaad9@gmail.com"
								urlRed1=""
								urlRed2=""
								image="maria-saad"
							/>
							<CardContacto
								name="Sofia González"
								job="Recoleccion la información para la base de datos del entrenamiento y validación"
								mail="sofia.gcristobal@gmail.com"
								urlRed1=""
								urlRed2=""
								image="sofia-gonzalez"
							/>
							<CardContacto
								name="Walter Zúñiga"
								job="Creacion y diseño del logo"
								mail="walterio_za94@hotmail.com"
								urlRed1=""
								urlRed2=""
								image="walter-zuniga"
							/>
							<CardContacto
								name="Eliden Vázquez"
								job="Recolección de información para  validación"
								mail="elidenvt@gmail.com"
								urlRed1=""
								urlRed2=""
								image="eliden-vazquez"
							/>
						</>
					)
				}
			</div>
		</section>
	);
}

export { HomeContacto };
