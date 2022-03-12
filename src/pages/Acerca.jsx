import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { Title } from "@components/Title";
import { Logo } from "@components/Logo";
import { Paragraph } from "@components/Paragraph";
import { LinkAnchor } from "@components/LinkAnchor";
import { Footer } from "@components/Footer";
import { Breadcrumbs } from "@components/Breadcrumbs";

function Acerca() {
	const {
		language,
		aboutText
	} = useContext(AppContext)

	useDocumentTitle("Acerca de ALAISA");
	return (
		<>
			<Content type="margin">
				<Breadcrumbs>
					{language ? "About ALAISA" : "Acerca de ALAISA"}
				</Breadcrumbs>

				<Title type="h2">
					{aboutText &&
						<h2 dangerouslySetInnerHTML={{ __html: `${aboutText[0]}` }} />
					}
				</Title>

				<Paragraph type="normal">
					{aboutText &&
						<p>
							{aboutText[1]}
						</p>
					}
				</Paragraph>

				<Paragraph type="bold">
					{aboutText &&
						<p dangerouslySetInnerHTML={{ __html: `${aboutText[2]}` }} />
					}
				</Paragraph>

				<LinkAnchor href="https://www.dropbox.com/s/shfi3u5pmwi2orj/Outcome%20Classification%20Model%20for%20COVID%20Manuscript.pdf?dl=0">
					{aboutText &&
						aboutText[3]
					}
				</LinkAnchor>

				<Logo type="imagotype" color="black" />
			</Content>
			<Footer />
		</>
	);
}

export { Acerca };