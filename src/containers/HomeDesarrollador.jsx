import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";

import { Title } from "@components/Title";
import { Subtitle } from "@components/Subtitle";

function HomeDesarrollador() {
	const {
		desarrolladorVisible,
		desarrollador,
		animateFadeInUp,
		animateFadeInRight,
		indexText
	} = useContext(AppContext);

	let devTexto = indexText["3"]

	/* soluciona problema render con keys */
	const generateKey = (pre) => {
		return `${pre}_${Math.random() * (2 - 1)}`;
	};

	return (
		<section className="wrapper" id="metricas" ref={desarrollador}>
			<Title type={`main margin ${desarrolladorVisible ? animateFadeInUp : "trans"}`}>
				{devTexto &&
					<h2 dangerouslySetInnerHTML={{ __html: `${devTexto[0]}` }} />
				}
			</Title>

			<Subtitle type=" margin">
				{devTexto &&
					<p dangerouslySetInnerHTML={{ __html: `${devTexto[1]}` }} />
				}
			</Subtitle>

			<div className="table-wrapper">
				<table className={`table ${desarrolladorVisible ? animateFadeInRight : "trans"}`}>
					{devTexto &&
						<>
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
									<th>Discharged</th>
									{devTexto[2].map((item) => (
										<td key={generateKey(item)}>{item}</td>
									))}
								</tr>
								<tr>
									<th>Death</th>
									{devTexto[3].map((item) => (
										<td key={generateKey(item)}>{item}</td>
									))}
								</tr>
								<tr>
									<th>ACC*</th>
									{devTexto[4].map((item) => (
										<td key={generateKey(item)}>{item}</td>
									))}
								</tr>
								<tr>
									<th>MCAVG*</th>
									{devTexto[5].map((item) => (
										<td key={generateKey(item)}>{item}</td>
									))}
								</tr>
								<tr>
									<th>WAVG*</th>
									{devTexto[6].map((item) => (
										<td key={generateKey(item)}>{item}</td>
									))}
								</tr>
							</tbody>
						</>
					}
				</table>
				<div className="table-wrapper--side">
					<p>
						<b>*ACC</b> = Accuracy
					</p>
					<p>
						<b>*MCAVG</b> = Macro Average
					</p>
					<p>
						<b>*WAVG</b> = Weight Average
					</p>
				</div>
			</div>

			<div className="date">
				{devTexto &&
					<>
						<p>
							{devTexto[7]}
						</p>
						<div className="date__main">
							<span>
								{devTexto[8]}
							</span>
						</div>
					</>
				}
			</div>
		</section>
	);
}

export { HomeDesarrollador };
