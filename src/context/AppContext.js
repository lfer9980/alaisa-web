import React from 'react';
import { useAnimations } from "@hooks/useAnimations";
import { useLanguage } from "@hooks/useLanguage";
import { useChangeHeader } from '@hooks/useChangeHeader';

const AppContext = React.createContext();

function AppProvider(props) {
	const language =  useLanguage();
	const animations = useAnimations();
	const changeHeader = useChangeHeader();
	return(
		<AppContext.Provider 
			value={{
				...language,
				...animations,
				...changeHeader,
			}}
			>
			{ props.children }
		</AppContext.Provider>
	);
}

export { AppContext, AppProvider };

