import React from "react";
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

import { Layout } from "@containers/Layout";
import { Header } from "@components/Header";

import "@styles/app.scss";


function AppUi() {
	return (
		<>
			<Layout>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="acerca" element={<Acerca />} />
						<Route path="administrador" element={<Administrador />} />
						<Route path="anadir" element={<Anadir />} />
						<Route path="entrenamiento" element={<Entrenamiento />} />
						<Route path="gracias" element={<Gracias />} />
						<Route path="modelo" element={<Modelo />} />
						<Route path="prediccion" element={<Prediccion />} />
						<Route path="privacidad" element={<Privacidad />} />
						<Route path="resultado" element={<Resultado />} />
						<Route path="publicaciones" element={<Publicaciones />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</Layout>
		</>
	);
}

export { AppUi };