import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import ReactCompilerConfig from "./src/Providers/react-compiler/ReactCompilerConfig";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	return {
		plugins: [
			react({
				babel: {
					plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
				},
			}),
			VitePWA({
				strategies: "injectManifest",
				srcDir: "src",
				filename: "service-worker.ts",
				includeAssets: ["favicon.ico", "robots.txt"],
			}),
		],
		base: env.PUBLIC_URL,
		build: { outDir: env.BUILD_PATH },
		server: {
			
			port: 3000,
			
		},
		preview: {
			port: 3000,
		},
	};
});
