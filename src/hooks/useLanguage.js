import { useState, useEffect } from "react";

/* codigo de pruebas para fetch */
/* const aboutJson = require("@static/body/about.json")
const indexJson = require("@static/body/index.json")
const modelJson = require("@static/body/model.json")
const privacyJson = require("@static/body/privacy.json")
const trainJson = require("@static/body/train.json")
const formJson = require("@static/forms/form.json")
const headerJson = require("@static/body/header.json")
const footerJson = require("@static/body/footer.json")
const publicationsJson = require("@static/body/publications.json") */

/* const datosTemporales = [
	{...indexJson},
	{...aboutJson},
	{...modelJson},
	{...trainJson},
	{...privacyJson},
	{...formJson},
	{...headerJson},
	{...footerJson},
	{...publicationsJson}
]; */

/* const aboutJson = process.env.API_ABOUT
const indexJson = process.env.API_INDEX
const modelJson = process.env.API_MODEL
const privacyJson = process.env.API_PRIVACY
const trainJson = process.env.API_TRAIN
const formJson = process.env.API_FORM
const headerJson = process.env.API_HEADER
const footerJson = process.env.API_FOOTER
const publicationsJson = process.env.API_PUBLICATIONS */

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
	const [datos, setDatos] = useState([]);

	useEffect(() => {
		Promise.all([
			fetch(aboutJson),
			fetch(indexJson),
			fetch(modelJson),
			fetch(privacyJson),
			fetch(trainJson),
			fetch(formJson),
			fetch(headerJson),
			fetch(footerJson),
			fetch(publicationsJson),
		])
		.then(([res1, res2, res3, res4, res5, res6, res7, res8, res9]) => Promise.all([
			res1.json(),
			res2.json(),
			res3.json(),
			res4.json(),
			res5.json(),
			res6.json(),
			res7.json(),
			res8.json(),
			res9.json()
		]))
		.then(([data1, data2, data3, data4, data5, data6, data7, data8, data9]) => setDatos([
			{...data1},
			{...data2},
			{...data3},
			{...data4},
			{...data5},
			{...data6},
			{...data7},
			{...data8},
			{...data9}
		]))
		.catch(error => {
			console.error("Error fetching data: ", error)
			setError(error)
		})
		.finally(() => {
			setLoading(false)
		})
	}, []);

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