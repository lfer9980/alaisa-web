import { useState } from "react";
import { useLocalStorage } from "@hooks/useLocalStorage";


const useInitialState = () => {
	const [headerState, setHeaderState] = useState(false)

	const toggleHeaderMobile = () => {
		setHeaderState(!headerState);
	}

	const isActiveClass = (test) => {
		if(test) {
			return "is-active";
		}
		return "";
	}

	return {
		toggleHeaderMobile,
		headerState,
		isActiveClass,
	};
}

export { useInitialState }