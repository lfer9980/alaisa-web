import React from "react";
import { Content } from "@containers/Content";
import { HomeDonativos } from "@containers/HomeDonativos";
import { Footer } from "@components/Footer";

function Donativos() {
	return(
		<>
			<Content type="no-padding-top">
				<HomeDonativos />
				<Footer />
			</Content>
		</>
	);
}

export { Donativos };