import { useRef } from "react";
import { useElementOnScreen } from "@hooks/useElementOnScreen";

function useAnimations() {
	const hero = useRef(null);
	const modelo = useRef(null);
	const entrenamiento = useRef(null);
	const desarrollador = useRef(null);
	const donativos = useRef(null);
	const contacto = useRef(null);

	const heroVisible = useElementOnScreen({
		threshold: 0.2,
	}, hero);

	const modeloVisible = useElementOnScreen({
		threshold: 0.3,
	}, modelo);
	
	const entrenamientoVisible = useElementOnScreen({
		threshold: 0.2,
	}, entrenamiento);

	const desarrolladorVisible = useElementOnScreen({
		threshold: 0.2,
	}, desarrollador);

	
	const donativosVisible = useElementOnScreen({
		threshold: 0.2,
	}, donativos);

	const contactoVisible = useElementOnScreen({
		threshold: 0.2,
	}, contacto);

	const animateFadeInUp = "animate__animated animate__fadeInUp animate_delay-1s"
	const animateFlipInY = "animate__animated animate__fadeInUp animate_delay-1s"
	const animateFadeInLeft = "animate__animated animate__fadeInLeft animate_delay-1s"
	const animateFadeInRight = "animate__animated animate__fadeInRight animate_delay-1s"

	return {
		hero,
		modelo,
		entrenamiento,
		desarrollador,
		donativos,
		contacto,
		heroVisible,
		modeloVisible,
		entrenamientoVisible,
		desarrolladorVisible,
		donativosVisible,
		contactoVisible,
		animateFadeInUp,
		animateFlipInY,
		animateFadeInLeft,
		animateFadeInRight,
	}
}

export { useAnimations }