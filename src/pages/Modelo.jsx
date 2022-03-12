import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "@context/AppContext";
import { useDocumentTitle } from "@hooks/useDocumentTitle";

import { Content } from "@containers/Content";
import { Breadcrumbs } from "@components/Breadcrumbs";
import { Paragraph } from "@components/Paragraph";
import { ButtonGreen } from "@components/ButtonGreen";
import { Title } from "@components/Title";
import { Logo } from "@components/Logo";

function Modelo() {
	const {
		language,
		modelText,
	} = useContext(AppContext)

	useDocumentTitle("Modelo Alaisa")

	return (
		<>
			<Content type="margin modelo">
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
						{modelText &&
							<h2>
								{modelText[0]}
							</h2>
						}
					</Title>

					<Paragraph type="bold">
						{modelText &&
							<p>
								{modelText[1]}
							</p>
						}
					</Paragraph>
					<Paragraph type="background">
						{modelText &&
							<>
								<p dangerouslySetInnerHTML={{ __html: `${modelText[2]}` }} />
								<p>
									{modelText[3]}
								</p>
							</>
						}
					</Paragraph>

					<Paragraph type="bold">
						{modelText &&
							<p>
								{modelText[4]}
							</p>
						}
					</Paragraph>

					<div className="link--terms">
						<Link to="/privacidad">
							{modelText &&
								<span>{modelText[5]}</span>
							}
						</Link>
					</div>

					{modelText &&
						<ButtonGreen link="prediccion" texto={modelText[6]} />
					}

					<div className="link--white">
						<Link to="/privacidad">
							{modelText &&
								<span>{modelText[7]}</span>
							}
						</Link>
					</div>
				</section>
			</Content>
		</>
	);
}

export { Modelo };