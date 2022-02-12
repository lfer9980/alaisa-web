import React from 'react';
import { useInitialState } from "@hooks/useInitialState";

const AppContext = React.createContext();

function AppProvider(props) {
	const initialState = useInitialState();
	return(
		<AppContext.Provider value={initialState}>
			{ props.children }
		</AppContext.Provider>
	);
}

export { AppContext, AppProvider };

