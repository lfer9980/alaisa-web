import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { AppContext } from "@context/AppContext";

import { Content } from "@containers/Content";
import { Title } from "@components/Title";
import { Breadcrumbs } from "@components/Breadcrumbs";
import { InputSelect } from "@components/InputSelect";
import { InputCheck } from "@components/InputCheck";
import { Input } from "@components/Input";
import { Form } from "@components/Form";


const URL_MODEL = process.env.URL_MODEL


function Prediccion() {
	const {
		language,
		formText
	} = useContext(AppContext)

	useDocumentTitle('Modelo de IA');
	
	const form = useRef(null);
	let navigate = useNavigate();

	/* manejador de datos del form */
	const handleSubmit = async (event) => {
		event.preventDefault();

		const formData = new FormData(form.current);
		const data = {};
		Object.entries(formText).map((item) => {
			data[item[1].id] = formData.get([item[1].id]);
		});

		console.log(Object.values(data))
		try {
			let res = await fetch(URL_MODEL, {
				method: "POST",
				headers: {
					"Content-Type": "multipart/form-data; boundary=<calculated when request is sent>",
				},
				body: data,
				redirect: "follow"
			})

			let resJson = await res.json();
			/* if (resJson.code) {
				navigate(`/Resultado/${resJson}}`)
			}  */
			console.log(resJson)
		} catch(error) {
			console.log(error)
		}
	}


return (
	<>
		<Content type="margin no-padding-bottom">
			<Breadcrumbs url="entrenamiento">
				{language ? "Predict" : "Predicción"}
			</Breadcrumbs>

			<Form>
				<Title type="h3">
					<h3>
						{language ?
							"Patient's general data"
							: "Datos generales del paciente"
						}
					</h3>
				</Title>
				<form className="form" autoComplete="off" action="/" ref={form} onSubmit={handleSubmit} >
					{/* 		<input type="hidden" name="crsf_token" value={""} /> */}
					{formText && Object.entries(formText).map((item) => (
						item[1]["type"] === "select" ?
							<InputSelect
								key={item[1].id}
								id={item[1].id}
								question={item[1].question}
								options={item[1].options}
							/>
							:
							<Input
								key={item[1].id}
								id={item[1].id}
								question={item[1].question}
								type={item[1].type}
							/>
					))}
{/* 
					<InputCheck>
						{language ?
							"I have read and accept the terms and conditions of the legal notice."
							: "He leído y acepto los términos y condiciones del aviso legal."
						}
					</InputCheck> */}

					<button
						className="form__button"
						id="guardar"
						name="guardar"
						type="submit"
					>
						{language ? "Predict" : "Predecir"}
					</button>
				</form>
			</Form>
		</Content>
	</>
);
}

export { Prediccion };