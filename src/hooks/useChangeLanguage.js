import { useState } from "react";

let texts = [
	{
		"id": "hero",
		"sections": {
			"esp": [
				"Evaluación <br /> <span> efectiva </span>del COVID-19 con tecnología en <span>CUU</span>.",
				"¡Hola! Soy ALAISA",
				"Fui creado con la idea de ayudar en los hospitales.",
				"Me enseñaron a identificar características en los personas con <strong> COVID-19</strong> para saber si los pacientes tienen más posibilidades de darse de alta o de fallecer por esta enfermedad.",
				"Comienza aquí",
				"Desarrollado con <span className='heart'></span> por INARI ABS",
			],
			"eng": [
				"Evaluation <br /> <span> effectiveness </span>of COVID-19 with technology in <span>CUU</span>.",
				"Hi! I'm ALAISA",
				"I was created with the idea of ​​helping in hospitals.",
				"They taught me to identify characteristics in people with <strong>COVID-19</strong> to know if patients are more likely to be discharged or die from this disease.",
				"Start here",
				"Developed with <span className='heart'></span> by INARI ABS",
			],
		}
	},
]


let initialText = (texts) => {
	const initText = texts.map(entries => {
		return entries.sections.esp
	})
	return initText;
}



function useChangeLanguage() {
	let englishText = []
	let spanishText = initialText(texts);
	const [language, setLanguage] = useState(false);
	const [text, setText] = useState(spanishText);

	const toggleLanguage = () => {
		setLanguage(!language);
		chooseTextLanguage();
	}

	const chooseTextLanguage = () => {
		if(!language) {
			englishText = texts.map(entries => {
				return entries.sections.eng
			})
			return setText(englishText);
		}
		return setText(spanishText)
	}
	
	return{
		text,
		language,
		toggleLanguage,
	};
}

export { useChangeLanguage };