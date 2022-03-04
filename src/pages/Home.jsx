import React from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { HomeModelo } from "@containers/HomeModelo"
import { HomeHero} from "@containers/HomeHero"
import { HomeEntrenamiento} from "@containers/HomeEntrenamiento"
import { HomeDonativos } from "@containers/HomeDonativos"
import { HomeDesarrollador } from "@containers/HomeDesarrollador"
import { HomeContacto } from "@containers/HomeContacto"
import { Footer } from "@components/Footer";

function Home({homeTexto}) {
	useDocumentTitle("Evaluación efectiva del covid en CUU")
	
	return(
		<>
			<Content type="no-padding-top no-background">
				<HomeHero heroTexto={homeTexto["0"]}/>
				<HomeModelo modeloTexto={homeTexto["1"]}/>
				<HomeEntrenamiento trainTexto={homeTexto["2"]}/>
				<HomeDesarrollador devTexto={homeTexto["3"]}/>
				<HomeDonativos donativosTexto={homeTexto["4"]}/>
				<HomeContacto contactoTexto={homeTexto["5"]}/>
			</Content>
			<Footer></Footer>
		</>
	);
}

export { Home };