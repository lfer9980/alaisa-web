import React from "react";
import { Content } from "@containers/Content";
import { HomeDonativos } from "@containers/HomeDonativos";
import { Footer } from "@components/Footer";

function Donativos({ donativosTexto, footerTexto }) {
	return(
		<>
			<Content type="no-padding-top">
				<HomeDonativos donativosTexto={donativosTexto}/>
				<Footer footerTexto={footerTexto}/>
			</Content>
		</>
	);
}

export { Donativos };