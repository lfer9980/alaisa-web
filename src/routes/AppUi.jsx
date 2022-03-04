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
	
	return (
		<>
			{
				loading ? 
				(<Loading />) :
				<Layout>
					<BrowserRouter>
						<Header headerTexto={textos[6]}/>
						<Routes>
							<Route path="/" element={<Home homeTexto={textos[0]} />} />
							<Route path="Rendimiento" element={<Rendimiento texto={textos[0]}/>} />
							<Route path="Donativos" element={<Donativos texto={textos[0]}/>} />
							<Route path="Contacto" element={<Contacto texto={textos[0]}/>} />
							<Route path="acerca" element={<Acerca texto={textos[1]} />} />
							<Route path="anadir" element={<Anadir texto={textos[2]} />} />
							<Route path="entrenamiento" element={<Entrenamiento texto={textos[3]} />} />
							<Route path="privacidad" element={<Privacidad texto={textos[4]}/>} />
							<Route path="modelo" element={<Modelo texto={textos[5]}/>} />
							<Route path="prediccion" element={<Prediccion texto={textos[5]}/>} />
							<Route path="gracias" element={<Gracias />} />
							<Route path="resultado" element={<Resultado />} />
							<Route path="publicaciones" element={<Publicaciones />} />
							<Route path="administrador" element={<Administrador />} />
							<Route path="*" element={<NotFound />} />
							<Route path="model" element={<Modelo texto={textos[5]}/>} />
							<Route path="training" element={<Entrenamiento texto={textos[3]} />} />
							<Route path="performance" element={<Rendimiento texto={textos[0]}/>} />
							<Route path="donations" element={<Donativos texto={textos[0]}/>} />
							<Route path="contact" element={<Contacto texto={textos[0]}/>} />
							<Route path="publications" element={<Publicaciones />} />
						</Routes>
					</BrowserRouter>
				</Layout>
			}
		</>
	);
}

export { AppUi };