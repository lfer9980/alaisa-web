import React from 'react';

import { Title } from "@components/Title";
import { Paragraph } from "@components/Paragraph";
import { Subtitle } from "@components/Subtitle";

function HomeDesarrollador() {
	return (
		<section className="wrapper" id="metricas">
			<Title type="main margin">
				<h2>
					Un <span>modelo</span> efectivo y <span>preciso</span>.	
				</h2>
			</Title>
			<Subtitle type=" margin">
				<p>Conoce los resultados de las pruebas de rendimiento hechas por los desarrolladores de Alaisa</p>
			</Subtitle>
			<div className="table-wrapper">
				<table className="table">
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
				<div className="table-wrapper--side">
					<p><b>*ACC</b> = Accuracy</p>
					<p><b>*MCAVG</b> = Macro Average</p>
					<p><b>*WAVG</b> = Weight Average</p>
				</div>
			</div>
			<div className="date">
				<p>Fecha de la ultima actualización:</p>
				<div className="date__main">
					<span>30 de jun 2021</span>
				</div>
			</div>
		</section>
	);
}

export { HomeDesarrollador };
