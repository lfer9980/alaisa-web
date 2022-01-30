import React, { useEffect } from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { HomeModelo} from "@containers/HomeModelo"
import { HomeHero} from "@containers/HomeHero"
import { HomeEntrenamiento} from "@containers/HomeEntrenamiento"
import { HomeDonativos } from "@containers/HomeDonativos"
import { HomeDesarrollador } from "@containers/HomeDesarrollador"
import { HomeContacto } from "@containers/HomeContacto"

function Home() {
	useDocumentTitle("Evaluación efectiva del covid en CUU");
	
	return(
		<>
			<HomeModelo ></HomeModelo>	
			<HomeHero></HomeHero>
			<HomeEntrenamiento></HomeEntrenamiento>
			<HomeDonativos></HomeDonativos>
			<HomeDesarrollador></HomeDesarrollador>
			<HomeContacto></HomeContacto>
		</>
	);
}

export { Home };