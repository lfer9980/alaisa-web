import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "@context/AppContext";
import { useDocumentTitle } from "@hooks/useDocumentTitle";

import { Content } from "@containers/Content";
import { Title } from "@components/Title";
import { Logo } from "@components/Logo";
import { Paragraph } from "@components/Paragraph";
import { Breadcrumbs } from "@components/Breadcrumbs";
import { ButtonGreen } from "@components/ButtonGreen";

function Entrenamiento() {
	const {
		language,
		trainText
	} = useContext(AppContext)

	useDocumentTitle("Entrenamiento");

	return (
		<>
			<Content type="margin entrenamiento">
				<Breadcrumbs>
					{language ? "Model" : "Modelo"}
				</Breadcrumbs>

				<div className="back-button">
					<Link to="/">
						<span>
							<i className="material-icons">arrow_back</i>
						</span>
					</Link>
				</div>

				<section className="main">
					<Logo type="isotype" />

					<Title type="h2">
						{trainText &&
							<h2 dangerouslySetInnerHTML={{ __html: `${trainText[0]}` }} />
						}
					</Title>

					<Paragraph type="background">
						{trainText &&
							<p dangerouslySetInnerHTML={{ __html: `${trainText[1]}` }} />
						}
					</Paragraph>

					<Paragraph type="bold">
						{trainText &&
							<p>
								{trainText[2]}
							</p>
						}
					</Paragraph>

					<div className="link--terms">
						<Link to="/privacidad">
							{trainText &&
								<span>{trainText[3]}</span>
							}
						</Link>
					</div>

					{trainText &&
						<ButtonGreen link="anadir" texto={trainText[4]} />
					}

					<div className="link--white">
						<Link to="/privacidad">
							{trainText &&
								<span>{trainText[5]}</span>
							}
						</Link>
					</div>
				</section>
			</Content>
		</>
	);
}

export { Entrenamiento };