import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { Title } from "@components/Title";
import { Breadcrumbs } from "@components/Breadcrumbs";
import { InputSelect } from "@components/InputSelect";
import { Input } from "@components/Input";
import { FormTitle } from "@components/FormTitle";
import { FormButton } from "@components/FormButton";


function Prediccion() {
	useDocumentTitle('Modelo de IA');

	const options = [
		{value:0, description:"defuncion"},
		{value:1, description:"Alta"},
	]

	return (
		<>
			<Content>
				<Breadcrumbs url="modelo" section="prediccion"/>
				<section className="main">
					<Title type="h3">
						<h3>
							Datos generales del paciente
						</h3>
					</Title>
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

export { Prediccion };