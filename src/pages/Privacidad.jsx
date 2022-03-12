import React, { useContext } from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { AppContext } from "@context/AppContext";

import { Content } from "@containers/Content";
import { Paragraph } from "@components/Paragraph";
import { Subtitle } from "@components/Subtitle";
import { Title } from "@components/Title";
import { Footer } from "@components/Footer";
import { Breadcrumbs } from "@components/Breadcrumbs";

function Privacidad() {
	const {
		language,
		privacyText
	} = useContext(AppContext)

	useDocumentTitle("privacidad")
	return (
		<>
			<Content type="margin">
				<Breadcrumbs>
					{language ? "Privacy" : "Privacidad"}
				</Breadcrumbs>

				<Title type="h2">
					{privacyText &&
						<h2 dangerouslySetInnerHTML={{ __html: `${privacyText[0]}` }} />
					}
				</Title>

				<Subtitle type="bold">
					{privacyText &&
						<h3>
							{privacyText[1]}
						</h3>
					}
				</Subtitle>

				<Paragraph type=" align-left">
					{privacyText &&
						<p>
							{privacyText[2]}
						</p>
					}
				</Paragraph>

				<Subtitle type="bold">
					{privacyText &&
						<h3>
							{privacyText[3]}
						</h3>
					}
				</Subtitle>

				<Paragraph type=" align-left">
					{privacyText &&
						<p>
							{privacyText[4]}
						</p>
					}
				</Paragraph>

				<ul className="paragraph--list">
					{privacyText &&
						<>
							<li>
								{privacyText[5]}
							</li>
							<li>
								{privacyText[6]}
							</li>
							<li>
								{privacyText[7]}
							</li>
							<li>
								{privacyText[8]}
							</li>
						</>
					}
				</ul>

				<Subtitle type="bold">
					{privacyText &&
						<h3>
							{privacyText[9]}
						</h3>
					}
				</Subtitle>

				<Paragraph type=" align-left">
					{privacyText &&
						<p>
							{privacyText[10]}
						</p>
					}
				</Paragraph>

				<div className="link">
					<a href="mailto:alaisadnn@gmail.com">
						alaisadnn@gmail.com
					</a>
				</div>

				<div className="date">
					{privacyText &&
						<>
							<p>
								{privacyText[11]}
							</p>
							<div className="date__main">
								<span>
									{privacyText[12]}
								</span>
							</div>
						</>
					}
				</div>

			</Content>
			<Footer />
		</>
	);
}

export { Privacidad };