import { AxiosHeaders, AxiosInstance } from "axios";
import { v4 as uuidv4 } from "uuid";

type CreateRequestInterceptor = {
	apiInstance: AxiosInstance;
};

const createRequestInterceptor = ({
	apiInstance,
}: CreateRequestInterceptor) => {
	apiInstance.interceptors.request.use(
		async (config) => {
			// TODO: add token refresh logic here
			// const token = await acquireTokenSilent()

			if (!config.headers) {
				config.headers = new AxiosHeaders();
			}

			config.headers["CorrelationId"] = uuidv4();
			// TODO: add bearer token here
			// config.headers['Authorization'] = 'Bearer ' + token;
			return config;
		},
		function (error) {
			console.error("api-request", "failure", error);
			return Promise.reject(error);
		},
	);
};

export default createRequestInterceptor;
