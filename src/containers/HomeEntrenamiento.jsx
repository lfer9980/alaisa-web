import React from 'react';
import { ButtonGreen } from '@components/ButtonGreen';

function HomeEntrenamiento({ children }) {
	return (
		<section classname="entrenamiento wrapper section" id="entrenamiento">
			<div classname="entrenamiento__title trans">
				<h2>
					Ayuda a <span>Alaisa</span> a mejorar en sus predicciones
				</h2>
			</div>
			<div classname="entrenamiento__main">
				<div classname="entrenamiento__main__parrafo one">
					<p>
						Se parte de los <span>profesionales de la salud</span> que ayudan a mejorar las predicciones del modelo.
					</p>
				</div>
				<div classname="entrenamiento__main__parrafo two">
					<p>
						¡Tu contribución, acelera exponencialmente la recolección de datos que sirven para <span>entrenar</span> a la red neuronal y <span>mejorar</span> la calidad de sus predicciones!
					</p>
				</div>
				<div classname="entrenamiento__main__parrafo three">
					<p>
						Para <span>contribuir</span>, solo debes entrar al entrenamiento
					</p>
				</div>
				<div classname="entrenamiento__main__parrafo four">
					<p>
						No te preocupes, el proceso es el mismo a cuando utilizas el modelo para recibir predicciones.
					</p>
				</div>
				<ButtonGreen text="Entrar al entrenamiento" link="entrenamiento"/>
			</div>
		</section>
	);
}

export { HomeEntrenamiento };
