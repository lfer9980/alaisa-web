import {useState, useMemo, useEffect} from "react";

function useElementOnScreen(options, targetRef) {
	const [isVisible, setIsVisible ] = useState(false);

	const intersectingFunction = entries => {
		const [entry] = entries;
		setIsVisible(entry.isIntersecting);
	}

	const optionsMemo = useMemo(() => {
		return options
	}, [options]);

	useEffect(() => {
		const observer = new IntersectionObserver(intersectingFunction, optionsMemo);
		const currentTarget = targetRef.current;
		if(currentTarget) observer.observe(currentTarget);
		
		return () => {
			if(currentTarget) observer.unobserve(currentTarget);
		}
	});


	return isVisible;
}

export {useElementOnScreen};