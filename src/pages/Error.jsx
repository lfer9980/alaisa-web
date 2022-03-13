import React, { useContext } from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Link } from "react-router-dom";

import { AppContext } from "@context/AppContext";
import { Content } from "@containers/Content";
import { Title } from "@components/Title";
import { Logo } from "@components/Logo";

function Error() {
	const {
		language
	} = useContext(AppContext)

	useDocumentTitle(":( No encontrado")
	return (
		<>
			<Content type="margin">
				<Title type="h2">
					<h2>
						UPS!
					</h2>
				</Title>
				<section className="main no-background">
					<Title type="h3">
						<h3>
							<span>Ha ocurrido un error</span><br />
						</h3>
					</Title>
					<Logo type="imagotype" />
					<div className="link">
						<Link to="/">
							<span >
								{language ? "Back to home page" : "Regresar a la página principal"}
							</span>
						</Link>
					</div>
				</section>
			</Content>
		</>
	);
}

export { Error };