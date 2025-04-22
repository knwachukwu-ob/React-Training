import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import handleError from "./handleError";

type CreateResponseInterceptorProps = {
	apiInstance: AxiosInstance;
};

const createResponseInterceptor = ({
	apiInstance,
}: CreateResponseInterceptorProps) => {
	apiInstance.interceptors.response.use(
		(response: AxiosResponse) => {
			return response;
		},
		(error: AxiosError) => {
			handleError(error);

			return Promise.reject(error);
		},
	);
};

export default createResponseInterceptor;
