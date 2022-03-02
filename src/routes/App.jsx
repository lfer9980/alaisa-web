import React, { useEffect } from "react";
import { AppUi } from "@routes/AppUi";
import { AppProvider } from "@context/AppContext";

function App () {
	return(
		<>
			<AppProvider>
				<AppUi />
			</AppProvider>
		</>
	);
}

export default App;