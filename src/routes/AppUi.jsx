import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "@context/AppContext";

import { Acerca } from "@pages/Acerca";
import { Administrador } from "@pages/Administrador";
import { Anadir } from "@pages/Anadir";
import { Entrenamiento } from "@pages/Entrenamiento";
import { Gracias } from "@pages/Gracias";
import { Home } from "@pages/Home";
import { Modelo } from "@pages/Modelo";
import { NotFound } from "@pages/NotFound";
import { Prediccion } from "@pages/Prediccion";
import { Privacidad } from "@pages/Privacidad";
import { Resultado } from "@pages/Resultado";
import { Publicaciones } from "@pages/Publicaciones";
import { Rendimiento } from "@pages/Rendimiento";
import { Donativos } from "@pages/Donativos";
import { Contacto } from "@pages/Contacto";

import { Layout } from "@containers/Layout";
import { Header } from "@components/Header";
import { Loading } from "@containers/Loading";

import "@styles/app.scss";
import "animate.css";


function AppUi() {
	const {
		loading,
		textos,
	} = useContext(AppContext)

	console.log(textos)

	return (
		<>
			{
				loading ? 
				(<Loading />) :
				<Layout>
					<BrowserRouter>
						<Header headerTexto={textos[6]}/>
						<Routes>
							<Route path="/" element={ <Home homeTexto={textos[0]} footerTexto={textos[7]}/> } />
							<Route path="Rendimiento" element={ <Rendimiento rendimientoTexto={textos[0]["3"]} footerTexto={textos[7]}/>} />
							<Route path="Donativos" element={ <Donativos donativosTexto={textos[0]["4"]} footerTexto={textos[7]}/>} />
							<Route path="Contacto" element={ <Contacto contactoTexto={textos[0]["5"]} footerTexto={textos[7]}/>} />
							<Route path="acerca" element={<Acerca acercaTexto={textos[1]} footerText={textos[7]} />} />
							<Route path="anadir" element={<Anadir anadirTexto={textos[5]} />} />
							<Route path="entrenamiento" element={<Entrenamiento entrenamientoTexto={textos[3]} />} />
							<Route path="privacidad" element={<Privacidad privTexto={textos[4]}/>} />
							<Route path="modelo" element={<Modelo modeloTexto={textos[2]}/>} />
							<Route path="prediccion" element={<Prediccion prediccionTexto={textos[5]}/>} />
							<Route path="gracias" element={<Gracias />} />
							<Route path="resultado" element={<Resultado />} />
							<Route path="publicaciones" element={<Publicaciones publicacionesTexto={textos[8]} footerTexto={textos[7]}/>} />
							<Route path="administrador" element={<Administrador />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</BrowserRouter>
				</Layout>
			}
		</>
	);
}

export { AppUi };