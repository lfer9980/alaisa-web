import { useState } from "react";

const aboutJson = require("@static/body/about.json")
const indexJson = require("@static/body/index.json")
const modelJson = require("@static/body/model.json")
const privacyJson = require("@static/body/privacy.json")
const trainJson = require("@static/body/train.json")
const formJson = require("@static/forms/form.json")
const headerJson = require("@static/body/header.json")
const footerJson = require("@static/body/footer.json")
const publicationsJson = require("@static/body/publications.json")

const datosTemporales = [
	{...indexJson},
	{...aboutJson},
	{...modelJson},
	{...trainJson},
	{...privacyJson},
	{...formJson},
	{...headerJson},
	{...footerJson},
	{...publicationsJson}
];

const changeLanguage = (data, language) => {
	let tempObj = {};
	tempObj = data.map(entries => {
		return entries["BODY"][language]
	})
	return tempObj;
}

function useLanguage() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(); 
	const [datos, setDatos] = useState(datosTemporales);

	/* comentado temporalmente para seguir con el fetch */
	/* useEffect(() => {
		fetch("http://api.escuelajs.co/api/v1/products?limit=5&offset=0")
		.then(response => {
			if(response.ok) {
				return response.json()
			}
			throw response;
		})
		.then(data => {
			setDatos(data)
		})
		.catch(error => {
			console.error("Error fetching data: ", error)
			setError(error)
		})
		.finally(() => {
			setLoading(false)
		})
	}, []); */

	let spanishText = changeLanguage(datos, "es");
	let englishText = changeLanguage(datos, "en");

	const [language, setLanguage] = useState(false);
	const [textos, setTextos] = useState(spanishText);


	const toggleLanguage = () => {
		setLanguage(!language);
		chooseTextLanguage();
	}

	const chooseTextLanguage = () => {
		if(!language) {
			setTextos(englishText)
		} else {
			setTextos(spanishText)
		}
	}

	return{
		loading,
		error,
		textos,
		toggleLanguage,
		language
	};
}

export { useLanguage };