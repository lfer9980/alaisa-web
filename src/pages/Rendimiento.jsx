import React from "react";
import { Content } from "@containers/Content";
import { HomeDesarrollador } from "@containers/HomeDesarrollador";
import { Footer } from "@components/Footer";

function Rendimiento({ rendimientoTexto, footerTexto }) {
	return(
		<>
			<Content type="no-padding-top no-padding-bottom no-background">
				<HomeDesarrollador devTexto={rendimientoTexto}/>
				<Footer footerTexto={footerTexto}/>
			</Content>
		</>
	);
}

export { Rendimiento };