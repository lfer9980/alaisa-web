import React from "react";
import { Content } from "@containers/Content";
import { HomeDesarrollador } from "@containers/HomeDesarrollador";
import { Footer } from "@components/Footer";

function Rendimiento() {
	return(
		<>
			<Content type="no-padding-top">
				<HomeDesarrollador />
				<Footer />
			</Content>
		</>
	);
}

export { Rendimiento };