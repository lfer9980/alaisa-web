import { useState } from "react";
import { useLocalStorage } from "@hooks/useLocalStorage";


const useInitialState = () => {
	const [headerState, setHeaderState] = useState(false)

	const toggleHeaderMobile = () => {
		setHeaderState(!headerState);
	}

	return {
		toggleHeaderMobile,
		headerState,
	};
}

export { useInitialState }