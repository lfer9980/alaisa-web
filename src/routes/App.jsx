import React, { useEffect, useState } from "react";
import { AppUi } from "@routes/AppUi";
import { AppProvider } from "@context/AppContext";
import { Loading } from "@containers/Loading";

function App () {
	const [loading, setLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false),3000)
	},[]);

	return(
		<>
			{loading === false ? (
				<AppProvider>
					<AppUi />
				</AppProvider>
			) : (
				<Loading />
			)}
		</>
	);
}

export default App;