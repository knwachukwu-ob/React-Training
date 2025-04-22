import postal from "postal";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import ENVELOPES from "../postal/envelopes";

const useServiceWorker = () => {
	const location = useLocation();
	const [serviceWorkerWaiting, setServiceWorkerWaiting] = useState(false);

	useEffect(() => {
		const sub = postal.subscribe({
			channel: ENVELOPES.SERVICE_WORKER.CHANNEL,
			topic: ENVELOPES.SERVICE_WORKER.TOPICS.NEW_VERSION_AVAILABLE,
			callback: () => setServiceWorkerWaiting(true),
		});

		return () => {
			sub.unsubscribe();
		};
	}, []);

	useEffect(() => {
		navigator.serviceWorker?.getRegistrations().then((registrationsArray) => {
			if (registrationsArray && registrationsArray.length > 0) {
				registrationsArray.forEach((registration) => {
					registration.update();

					if (registration.waiting) {
						setServiceWorkerWaiting(true);
					}
				});
			}
		});
	}, [location]);

	const applyServiceWorkerUpdate = useCallback(() => {
		navigator.serviceWorker?.getRegistrations().then((registrationsArray) => {
			registrationsArray.forEach((registration) => {
				if (registration.waiting) {
					registration.waiting?.postMessage({ type: "SKIP_WAITING" });
				}
			});
			window.location.reload();
		});
	}, []);

	const applyServiceWorkerUpdateSilent = useCallback(() => {
		if (serviceWorkerWaiting) {
			applyServiceWorkerUpdate();
		}
	}, [applyServiceWorkerUpdate, serviceWorkerWaiting]);

	return {
		serviceWorkerWaiting,
		applyServiceWorkerUpdate,
		applyServiceWorkerUpdateSilent,
	};
};

export default useServiceWorker;
