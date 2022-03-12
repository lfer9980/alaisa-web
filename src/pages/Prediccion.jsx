import React, { useContext } from "react";

import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { AppContext } from "@context/AppContext";

import { Content } from "@containers/Content";
import { Title } from "@components/Title";
import { Breadcrumbs } from "@components/Breadcrumbs";
import { InputSelect } from "@components/InputSelect";
import { InputCheck } from "@components/InputCheck";
import { Input } from "@components/Input";
import { FormButton } from "@components/FormButton";
import { Form } from "@components/Form";


function Prediccion() {
	const {
		language,
		formText
	} = useContext(AppContext)
	
	useDocumentTitle('Modelo de IA');

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
					<form className="form" method="POST" autoComplete="off" action="">
						<input type="hidden" name="crsf_token" value={""} />

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

						<InputCheck>
							{language ?
								"I have read and accept the terms and conditions of the legal notice."
								: "He leído y acepto los términos y condiciones del aviso legal."
							}
						</InputCheck>
						<FormButton name="guardar" value={language ? "Predict": "Predecir"} />
					</form>
				</Form>
			</Content>
		</>
	);
}

export { Prediccion };