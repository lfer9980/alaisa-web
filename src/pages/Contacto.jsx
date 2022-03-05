import React from "react";
import { Content } from "@containers/Content";
import { HomeContacto } from "@containers/HomeContacto";
import { Footer } from "@components/Footer";

function Contacto({ contactoTexto, footerTexto }) {
	return(
		<>
			<Content type="no-padding-top">
				<HomeContacto contactoTexto={contactoTexto}/>
				<Footer footerTexto={footerTexto}/>
			</Content>
		</>
	);
}

export { Contacto };