import React from 'react';
import { useInitialState } from "@hooks/useInitialState";
import { useAnimations } from "@hooks/useAnimations";

const AppContext = React.createContext();

function AppProvider(props) {
	const initialState = useInitialState();
	const animations = useAnimations();
	return(
		<AppContext.Provider value={ {...initialState, ...animations} }>
			{ props.children }
		</AppContext.Provider>
	);
}

export { AppContext, AppProvider };

