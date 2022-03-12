import React from "react";

import { Content } from "@containers/Content";
import { HomeContacto } from "@containers/HomeContacto";
import { Footer } from "@components/Footer";

function Contacto() {
	return (
		<>
			<Content type="no-padding-top no-padding-bottom no-background">
				<HomeContacto />
				<Footer />
			</Content>
		</>
	);
}

export { Contacto };