import React from 'react';
import { useInitialState } from "@hooks/useInitialState";
import { useAnimations } from "@hooks/useAnimations";
import { useChangeLanguage } from "@hooks/useChangeLanguage";
import { useChangeHeader } from '@hooks/useChangeHeader';

const AppContext = React.createContext();

function AppProvider(props) {
	const language = useChangeLanguage();
	const initialState = useInitialState();
	const animations = useAnimations();
	const changeHeader = useChangeHeader();
	return(
		<AppContext.Provider 
			value={
				{
					...language,
					...initialState, 
					...animations,
					...changeHeader,
					}}
			>
			{ props.children }
		</AppContext.Provider>
	);
}

export { AppContext, AppProvider };

