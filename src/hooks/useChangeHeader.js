import { useState } from "react";


const useChangeHeader = () => {
	const [headerState, setHeaderState] = useState(false)

	const toggleHeaderMobile = () => {
		setHeaderState(!headerState);
	}

	return {
		toggleHeaderMobile,
		headerState,
	};
}

export { useChangeHeader }