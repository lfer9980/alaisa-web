import React from "react";
import { Content } from "@containers/Content";
import { HomeDonativos } from "@containers/HomeDonativos";
import { Footer } from "@components/Footer";

function Donativos() {
	return (
		<>
			<Content type="no-padding-top no-padding-bottom no-background">
				<HomeDonativos />
				<Footer />
			</Content>
		</>
	);
}

export { Donativos };