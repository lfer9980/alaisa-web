import React from 'react';

function HomeDesarrollador({ children }) {
	return (
		<section className="desarrollador wrapper section" id="metricas">
			<div className="desarrollador__title trans">
				<h2>Un <span>modelo</span> efectivo y <span>preciso.</span></h2>
			</div>
			<div className="desarrollador__subtitle">
				<p>Conoce los resultados de las pruebas de rendimiento hechas por los desarrolladores de Alaisa</p>
			</div>
			<div className="desarrollador__table">
				<table className="wrapper--tabla trans">
				<thead> 
					<tr>
					<th> </th>
					<th>precision</th>
					<th>recall</th>
					<th>f1-score</th>
					<th>support</th>
					</tr>
				</thead>
				<tbody> 
					<tr> 
					<th>0.0</th>
					<td>0.92</td>
					<td>0.96</td>
					<td>0.94</td>
					<td>24</td>
					</tr>
					<tr>
					<th>1.0</th>
					<td>0.96</td>
					<td>0.92</td>
					<td>0.94</td>
					<td>24</td>
					</tr>
					<tr> 
					<th>ACC*</th>
					<td />
					<td />
					<td>0.94</td>
					<td>48</td>
					</tr>
					<tr> 
					<th>MCAVG*</th>
					<td>0.94</td>
					<td>0.94</td>
					<td>0.94</td>
					<td>48</td>
					</tr>
					<tr>
					<th>WAVG*</th>
					<td>0.94</td>
					<td>0.94</td>
					<td>0.94</td>
					<td>48</td>
					</tr>
				</tbody>
				</table>
				<div className="wrapper--side-info">
				<p><b>*ACC</b> = Accuracy</p>
				<p><b>*MCAVG</b> = Macro Average</p>
				<p><b>*WAVG</b> = Weight Average</p>
				</div>
			</div>
			<div className="fecha">
				<p>Fecha de la ultima actualización:</p>
				<div className="fecha__main"><span>30 de jun 2021</span></div>
			</div>
		</section>
	);
}

export { HomeDesarrollador };
