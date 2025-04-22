import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import Router from "./Layout/Routes/RouteContainer";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import ENVELOPES from "./Providers/postal/envelopes";
import postal from "postal";
import reportWebVitals from "./reportWebVitals";
// import enableMocking from "./Providers/api/enableMocking";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={Router} />
	</StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register({
	onUpdate: () => {
		postal.publish({
			channel: ENVELOPES.SERVICE_WORKER.CHANNEL,
			topic: ENVELOPES.SERVICE_WORKER.TOPICS.NEW_VERSION_AVAILABLE,
		});
	},
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// remove this line once the backend is in place
// enableMocking();
