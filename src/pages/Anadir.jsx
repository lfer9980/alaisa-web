import React, { useContext } from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { Breadcrumbs } from "@components/Breadcrumbs";
import { InputSelect } from "@components/InputSelect";
import { InputCheck } from "@components/InputCheck";
import { Input } from "@components/Input";
import { Form } from "@components/Form";
import { FormButton } from "@components/FormButton";
import { Title } from "@components/Title";
import { AppContext } from "@context/AppContext";

function Anadir({ anadirTexto }) {
	const {
		language
	} = useContext(AppContext)
	
	useDocumentTitle("Entrenar");

	return (
		<>
			<Content type="margin no-padding-bottom">
				<Breadcrumbs url="entrenamiento">
					{language ? "Add": "Añadir"}
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
					<form className="form" method="POST" autoComplete="off">
						<input type="hidden" name="crsf_token" defaultValue="" />

						{anadirTexto && Object.entries(anadirTexto).map((item) => (
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

						<FormButton name="guardar" value={language ? "Send Contribution": "Enviar contribución"} />
					</form>
				</Form>
			</Content>
		</>
	);
}

export { Anadir };