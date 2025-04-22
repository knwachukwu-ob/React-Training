import axios, { AxiosError } from "axios";
import postal from "postal";
import ENVELOPES from "../postal/envelopes";

const handleError = (error: Error | AxiosError) => {
	if (error instanceof AxiosError || axios.isAxiosError(error)) {
		const correlationId = error.config?.headers
			? error.config.headers["X-Correlation-Id"]
			: null;

		if (error.response?.status === 400) {
			if (error.response.data.errors) {
				for (const [, value] of Object.entries(error.response.data.errors)) {
					postal.publish({
						channel: ENVELOPES.ERROR.CHANNEL,
						topic: ENVELOPES.ERROR.TOPICS.BAD_REQUEST,
						data: (value as Array<string>)[0],
					});
				}
			}
		} else if (error.response?.status === 404) {
			postal.publish({
				channel: ENVELOPES.ERROR.CHANNEL,
				topic: ENVELOPES.ERROR.TOPICS.NOT_FOUND,
				data: error.response.data.detail,
			});
		} else {
			postal.publish({
				channel: ENVELOPES.ERROR.CHANNEL,
				topic: ENVELOPES.ERROR.TOPICS.INTERNAL_SERVER_ERROR,
				data: {
					message: "Something went wrong.",
					correlationId,
				},
			});
		}
	} else {
		postal.publish({
			channel: ENVELOPES.ERROR.CHANNEL,
			topic: ENVELOPES.ERROR.TOPICS.INTERNAL_SERVER_ERROR,
			data: {
				message: "Something went wrong.",
			},
		});
	}

	return Promise.reject(error);
};

export default handleError;
