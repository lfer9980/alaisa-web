import React, {useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "@context/AppContext";

import { Acerca } from "@pages/Acerca";
import { Administrador } from "@pages/Administrador";
/* import { Entrenamiento } from "@pages/Entrenamiento"; */
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
import { Error } from "@pages/Error";

import { Layout } from "@containers/Layout";
import { Loading } from "@containers/Loading";
import { Header } from "@components/Header";

import "@styles/app.scss";
import "animate.css";


function AppUi() {
	const {
		loading
	} = useContext(AppContext);

	return (
		<>
			{loading ?
				(
					<Loading />
				)
				:(
					<Layout>
						<BrowserRouter>
							<Header />
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="Rendimiento" element={<Rendimiento />} />
								<Route path="Donativos" element={<Donativos />} />
								<Route path="Contacto" element={<Contacto />} />
								<Route path="acerca" element={<Acerca />} />
								<Route path="privacidad" element={<Privacidad />} />
								<Route path="modelo" element={<Modelo />} />
								<Route path="prediccion" element={<Prediccion />} />
								<Route path="resultado" element={<Resultado />} />
								<Route path="publicaciones" element={<Publicaciones />} />
								<Route path="administrador" element={<Administrador />} />
								<Route path="error" element={<Error />} />
								<Route path="*" element={<NotFound />} />
							</Routes>
						</BrowserRouter>
					</Layout>
				)
			}
		</>
	);
}

export { AppUi };