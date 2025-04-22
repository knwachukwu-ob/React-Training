import postal from "postal";
import { useEffect } from "react";
import { toast } from "react-toastify";
import ENVELOPES from "../postal/envelopes";

const useApiErrorHandler = () => {
	useEffect(() => {
		const sub = postal.subscribe({
			channel: ENVELOPES.ERROR.CHANNEL,
			topic: ENVELOPES.ERROR.TOPICS.BAD_REQUEST,
			callback: (message: string) =>
				toast.warning(message, {
					autoClose: false,
				}),
		});

		return () => {
			sub.unsubscribe();
		};
	}, []);

	useEffect(() => {
		const sub = postal.subscribe({
			channel: ENVELOPES.ERROR.CHANNEL,
			topic: ENVELOPES.ERROR.TOPICS.NOT_FOUND,
			callback: (message: string) =>
				toast.warning(message, {
					autoClose: false,
				}),
		});

		return () => {
			sub.unsubscribe();
		};
	}, []);

	useEffect(() => {
		const sub = postal.subscribe({
			channel: ENVELOPES.ERROR.CHANNEL,
			topic: ENVELOPES.ERROR.TOPICS.INTERNAL_SERVER_ERROR,
			callback: (data: { message: string; correlationId: string }) =>
				toast.error(`${data.message} ${data.correlationId}`, {
					autoClose: false,
				}),
		});

		return () => {
			sub.unsubscribe();
		};
	}, []);
};

export default useApiErrorHandler;
