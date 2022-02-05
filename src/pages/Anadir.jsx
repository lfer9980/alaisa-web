import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { Breadcrumbs } from "@components/Breadcrumbs";
import { InputSelect } from "@components/InputSelect";
import { Input } from "@components/Input";
import { FormTitle } from "@components/FormTitle";
import { FormButton } from "@components/FormButton";
import { Title } from "@components/Title";
import "@styles/Anadir.scss";

function Anadir() {
	useDocumentTitle("Entrenar");

	const options = [
		{value:0, description:"defuncion"},
		{value:1, description:"Alta"},
	]

	return (
		<>
			<Content>
				<Breadcrumbs url="entrenamiento" section="anadir"/>
				<section className="main"> 
					<Title type="h3" text="Datos generales del paciente" />
					<form className="form" method="POST" autoComplete="off">
						<input type="hidden" name="crsf_token" defaultValue="" />
						<InputSelect name="desenlace" text="Desenlace del paciente" options={options} />
						<Input name="edad" text="Edad" placeholder="Edad" />
						<FormTitle title="variables fisiólogicas"/>

						<FormButton name="guardar" defaultValue="Enviar contribución" />
					</form>
				</section>
			</Content>
		</>
	);
}

export { Anadir };