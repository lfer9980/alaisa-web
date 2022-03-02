import React, { useEffect } from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { HomeModelo } from "@containers/HomeModelo"
import { HomeHero} from "@containers/HomeHero"
import { HomeEntrenamiento} from "@containers/HomeEntrenamiento"
import { HomeDonativos } from "@containers/HomeDonativos"
import { HomeDesarrollador } from "@containers/HomeDesarrollador"
import { HomeContacto } from "@containers/HomeContacto"
import { Footer } from "@components/Footer";

function Home({texto}) {
	useDocumentTitle("Evaluación efectiva del covid en CUU")
	console.log(texto)
	
	return(
		<>
			<Content type="no-padding-top no-background">
				<HomeHero homeTexto={texto["0"]}/>
				<HomeModelo homeTexto={texto["1"]}/>
				<HomeEntrenamiento homeTexto={texto["2"]}/>
				<HomeDesarrollador homeTexto={texto["3"]}/>
				<HomeDonativos homeTexto={texto["4"]}/>
				<HomeContacto homeTexto={texto["5"]}/>
			</Content>
			<Footer></Footer>
		</>
	);
}

export { Home };