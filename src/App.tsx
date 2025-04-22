import useTheme from "./Theme/useTheme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "./Components";
import ToastContainer from "./Providers/react-toastify/ToastContainer";
import LayoutContainer from "./Layout/LayoutContainer";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./Providers/react-query/queryClient";
import useApiErrorHandler from "./Providers/api/useApiErrorHandler";

function App() {
	useApiErrorHandler();
	const theme = useTheme();

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<ToastContainer />
				<LayoutContainer />
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default App;
