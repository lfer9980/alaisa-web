import React, { useEffect } from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";

function Home() {
	useDocumentTitle("Evaluación efectiva del covid en CUU");
	
	return(
		<section>
			<h2>Home</h2>
		</section>
	);
}

export { Home };