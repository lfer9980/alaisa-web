import { useState, useEffect } from "react";

/* APIS */
const aboutJson = process.env.API_ABOUT
const indexJson = process.env.API_INDEX
const modelJson = process.env.API_MODEL
const privacyJson = process.env.API_PRIVACY
const formJson = process.env.API_FORM
const headerJson = process.env.API_HEADER
const footerJson = process.env.API_FOOTER
const publicationsJson = process.env.API_PUBLICATIONS


/* funcion para filtrar el lenguage */
const filterLanguage = (data, language) => {
	let tempObj = {};
	tempObj = data.map(entries => {
		return entries["content"][language]
	})
	return tempObj;
}

function useLanguage() {
	const [language, setLanguage] = useState(false);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();
	const [datos, setDatos] = useState([]);
	const [textos, setTextos] = useState([]);

	useEffect(() => {
		Promise.all([
			fetch(aboutJson),
			fetch(indexJson),
			fetch(modelJson),
			fetch(privacyJson),
			fetch(formJson),
			fetch(headerJson),
			fetch(footerJson),
			fetch(publicationsJson),
		])
			.then(([res1, res2, res3, res4, res5, res6, res7, res8]) => Promise.all([
				res1.json(),
				res2.json(),
				res3.json(),
				res4.json(),
				res5.json(),
				res6.json(),
				res7.json(),
				res8.json(),
			]))
			.then(([data1, data2, data3, data4, data5, data6, data7, data8]) => {
				setDatos([
					{ ...data1 },
					{ ...data2 },
					{ ...data3 },
					{ ...data4 },
					{ ...data5 },
					{ ...data6 },
					{ ...data7 },
					{ ...data8 },
				]);

				/* setear como idioma inicial el esp */
				setTextos(filterLanguage([
					{ ...data1 },
					{ ...data2 },
					{ ...data3 },
					{ ...data4 },
					{ ...data5 },
					{ ...data6 },
					{ ...data7 },
					{ ...data8 },
				], "es"))
			})
			.catch(error => {
				console.error("Error fetching data: ", error)
				setError(error)
			})
			.finally(() => {
				setLoading(false)
			})
	}, []);

	let spanishText = filterLanguage(datos, "es")
	let englishText = filterLanguage(datos, "en")

	const toggleLanguage = () => {
		setLanguage(!language);
		chooseTextLanguage();
	}

	const chooseTextLanguage = () => {
		if (!language) {
			setTextos(englishText)
		} else {
			setTextos(spanishText)
		}
	}

	let aboutText = textos[0]
	let indexText = textos[1]
	let modelText = textos[2]
	let privacyText = textos[3]
	let formText = textos[4]
	let headerText = textos[5]
	let footerText = textos[6]
	let publicationsText = textos[7]

	return {
		loading,
		toggleLanguage,
		language,
		indexText,
		aboutText,
		modelText,
		privacyText,
		formText,
		headerText,
		footerText,
		publicationsText
	};
}

export { useLanguage };