import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Content } from "@containers/Content";
import { Paragraph } from "@components/Paragraph";
import { Subtitle } from "@components/Subtitle";
import { Title } from "@components/Title";
import { Footer } from "@components/Footer";
import { Breadcrumbs } from "@components/Breadcrumbs";

function Publicaciones({ publicacionesTexto , footerTexto }) {
	const {
		language
	} = useContext(AppContext)

	useDocumentTitle("Publicaciones")

	return (
		<>
			<Content type="margin">
				<Breadcrumbs>
					{language ? "Publications" : "Publicaciones"}
				</Breadcrumbs>

				<section className="main-publications">
					<Subtitle type="background">
						<h2>
							{language ? "Publications" : "Publicaciones"}
						</h2>
					</Subtitle>
					{publicacionesTexto ?
						(
							Object.entries(publicacionesTexto["publications"]).map((item) => (
								<div key={item[0]}>
									<Title type="h3">
										<h3>
											{item[0]}
										</h3>
									</Title>
									{
										item[1].map((entries) => (
											<Paragraph type=" align-left">
												<p>
													<span className="paragraph__span">
														{entries.name}
													</span>
													{entries.text}
												</p>
											</Paragraph>
										))
									}
								</div>
							))

						)
						: (
							<Title type="h3">
								<h3>
									{language ? "There are not Publications yet" : "No hay publicaciones aun"}
								</h3>
							</Title>
						)
					}
				</section>

				<section className="main-publications">
					<Subtitle type="background">
						<h2>
							{language ? "Last Updates" : "Ultimas actualizaciones"}
						</h2>
					</Subtitle>

					{publicacionesTexto ?
						(
							Object.entries(publicacionesTexto["release"]).map((item) => (
								<div key={item[0]}>
									<Title type="h3">
										<h3>
											{item[1].version}
										</h3>
									</Title>

									<Paragraph type=" align-left">
										<p>
											<span className="paragraph__span">
												{item[1].name}
											</span>
											{item[1].text}
										</p>
									</Paragraph>
								</div>
							))

						)
						: (
							<Title type="h3">
								<h3>
									{language ? "There are not new releases yet" : "No hay nuevas versiones aún"}
								</h3>
							</Title>
						)
					}

				</section>
			</Content >
			<Footer  footerTexto={footerTexto}/>
		</>
	);
}

export { Publicaciones };