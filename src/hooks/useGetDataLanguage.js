import { useEffect, useState } from "react";
import axios from "axios";

const API = process.env.API;

const useGetDataLanguage = (API) => {
	const [text, setText] = useState([]);
	
	useEffect(async () => {
		const response = await axios(API);
		setText(response.data);
	}, []);

	return text;
}

export { useGetDataLanguage };