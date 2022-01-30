import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContext } from "@context/AppContext";
import { useInitialState } from "@hooks/useInitialState";

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
import { Progreso } from "@pages/Progreso";
import { Resultado } from "@pages/Resultado";

import { Layout } from "@containers/Layout";


function App() {
	const initialState = useInitialState();
	return(
		<AppContext.Provider value={initialState}>
			<Layout>
				<BrowserRouter>
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
						<Route path="progreso" element={<Progreso />} />
						<Route path="resultado" element={<Resultado />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</Layout>
		</AppContext.Provider>
	);
}

export default App;