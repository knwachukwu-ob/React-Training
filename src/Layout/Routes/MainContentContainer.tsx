import { ErrorBoundary } from "react-error-boundary";
import { Outlet, useLocation } from "react-router";
import { Box } from "../../Components";
import ErrorFallback from "../../Pages/ErrorFallback/ErrorFallback";
import { styled } from "@mui/material/styles";

const MainContentContainer = () => {
	const location = useLocation();

	const StyledBox = styled(Box)(({ theme }) => ({
		overflow: "auto",
		minHeight: `calc(100vh - ${theme.custom.appBarHeight}rem)`,
		maxHeight: `calc(100vh - ${theme.custom.appBarHeight}rem)`,
		minWidth: `calc(100vw - ${theme.custom.drawerWidth}rem)`,
		maxWidth: `calc(100vw - ${theme.custom.drawerWidth}rem)`,
		backgroundColor: theme.palette.background.default,
		padding: "1.5rem",
		marginTop: `${theme.custom.appBarHeight}rem`,
	}));

	return (
		<StyledBox component="main">
			<ErrorBoundary FallbackComponent={ErrorFallback} resetKeys={[location]}>
				<Outlet />
			</ErrorBoundary>
		</StyledBox>
	);
};

export default MainContentContainer;
