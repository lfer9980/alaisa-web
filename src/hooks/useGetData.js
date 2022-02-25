import { useEffect } from "react";
import axios from "axios";

const API = process.env.API;

const useGetData = (API) => {
	useEffect(async () => {
		const response = await axios(API);
		const data = response.data
		return data;
	}, []);
}

export { useGetData };