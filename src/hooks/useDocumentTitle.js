import React, { useEffect } from "react";

const useDocumentTitle = (title) => {
	useEffect(() => {
		document.title = `ALAISA | ${title}`;
	}, [])
}

export  { useDocumentTitle };