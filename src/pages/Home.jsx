import React, { useEffect } from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { HomeModelo } from "@containers/HomeModelo"
import { HomeHero} from "@containers/HomeHero"
import { HomeEntrenamiento} from "@containers/HomeEntrenamiento"
import { HomeDonativos } from "@containers/HomeDonativos"
import { HomeDesarrollador } from "@containers/HomeDesarrollador"
import { HomeContacto } from "@containers/HomeContacto"
import { Footer } from "@components/Footer";

function Home() {
	useDocumentTitle("Evaluación efectiva del covid en CUU");
	
	return(
		<>
			<HomeHero></HomeHero>
			<HomeModelo ></HomeModelo>	
			<HomeEntrenamiento></HomeEntrenamiento>
			<HomeDesarrollador></HomeDesarrollador>
			<HomeDonativos></HomeDonativos>
			<HomeContacto></HomeContacto>
			<Footer></Footer>
		</>
	);
}

export { Home };