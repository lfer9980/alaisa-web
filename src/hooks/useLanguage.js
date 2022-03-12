import { useState, useEffect } from "react";

/* APIS */
const aboutJson = process.env.API_ABOUT
const indexJson = process.env.API_INDEX
const modelJson = process.env.API_MODEL
const privacyJson = process.env.API_PRIVACY
const trainJson = process.env.API_TRAIN
const formJson = process.env.API_FORM
const headerJson = process.env.API_HEADER
const footerJson = process.env.API_FOOTER
const publicationsJson = process.env.API_PUBLICATIONS


/* funcion para filtrar el lenguage */
const filterLanguage = (data, language) => {
	let tempObj = {};
	tempObj = data.map(entries => {
		return entries["content"]
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
			.then(([data1, data2, data3, data4, data5, data6, data7, data8, data9]) => {
				setDatos([
					{ ...data1 },
					{ ...data2 },
					{ ...data3 },
					{ ...data4 },
					{ ...data5 },
					{ ...data6 },
					{ ...data7 },
					{ ...data8 },
					{ ...data9 }
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
					{ ...data9 }
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
	let trainText = textos[4]
	let formText = textos[5]
	let headerText = textos[6]
	let footerText = textos[7]
	let publicationsText = textos[8]

	return {
		loading,
		toggleLanguage,
		language,
		indexText,
		aboutText,
		modelText,
		trainText,
		privacyText,
		formText,
		headerText,
		footerText,
		publicationsText
	};
}

export { useLanguage };