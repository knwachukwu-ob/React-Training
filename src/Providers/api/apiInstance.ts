import axios from "axios";
import createResponseInterceptor from "./createResponseInterceptor";
import createRequestInterceptor from "./createRequestInterceptor";

const apiInstance = axios.create({
	baseURL: import.meta.env.API_URL,
	
});

createResponseInterceptor({ apiInstance });
createRequestInterceptor({ apiInstance });

export default apiInstance;
