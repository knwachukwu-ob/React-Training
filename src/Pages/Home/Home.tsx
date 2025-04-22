import { styled } from "@mui/material/styles";
import React from "react";
import { Box, Card, Typography } from "../../Components";

const LayoutContainer = styled(Box)({
	display: "flex",
	flexDirection: "column",
	borderStyle: "solid",
	borderWidth: "1px",
	marginBottom: "1rem",
});

const LayoutSubContainer = styled(Box)({
	display: "flex",
	flexDirection: "row",
	borderStyle: "solid",
	borderWidth: "1px",
});

const LayoutLeftChildContainer = styled(Box)({
	padding: "0.5rem",
	borderStyle: "solid",
	borderWidth: "1px",
	width: "10rem",
});

const LayoutRightChildContainer = styled(Box)({
	display: "flex",
	flexDirection: "column",
	flexGrow: "1",
	padding: "0.5rem",
	borderStyle: "solid",
	borderWidth: "1px",
});

const Home = () => {
	return (
		<>
			<Typography variant="h5">
				The Open Box Vite React Typescript Template
			</Typography>
			<Typography variant="subtitle1">
				Welcome to the Open Box Vite React Typescript Template and happy coding!
			</Typography>

			<Card title="API Logic">
				<Typography variant="h6">
					<a href="https://axios-http.com/docs/intro">Axios</a>
				</Typography>
				<Typography paragraph>
					Is a promised-based HTTP client and is used to abstract any API calls.
					We use Axios interceptors to inject any headers before requests such
					as tokens or correlation ids.
				</Typography>

				<Typography variant="h6">
					<a href="https://github.com/ctimmerm/axios-mock-adapter">
						Axios Mock Adapter
					</a>
				</Typography>
				<Typography paragraph>
					This application is set up to run without a backend through the axios
					mock adapter, even though it's making API calls. We make use of the
					Axios mock adapter to speed up development
				</Typography>
				<Typography paragraph>
					Each domain's mocking behavior can be set up individually. By setting
					up the mocks for any API endpoint and making sure the
					`enableMocking()` function is referencing your mocks. Have a look at
					the `Providers/api/enableMocking` and
					`Providers/weatherForecasts/mocks/setupWeatherForecastsMocks` files on
					how to activate mocking for a domain.
				</Typography>
				<Typography paragraph>
					If you want to disable mocking entirely remove the `enableMocking()`
					function from the main.tsx file.
				</Typography>

				<Typography variant="h6">
					<a href="https://tanstack.com/query/latest">Tanstack React Query</a>
				</Typography>

				<Typography paragraph>
					React Query is often described as the missing data-fetching library
					for React, but in more technical terms, it makes fetching, caching,
					synchronizing, and updating server state in your React applications a
					breeze.
				</Typography>
			</Card>

			<Card title="Forms">
				<Typography variant="h6">
					<a href="https://react-hook-form.com/">React Hook Form</a>
				</Typography>
				<Typography paragraph>
					HTML forms inherently break React's state management pattern. We use
					react hook form to abstract and circumvent and form related
					complexities that you might run into. Have a look at the
					`Pages/WeatherForecasts/WeatherForecast` implementation for an
					example.
				</Typography>
			</Card>

			<Card title="Styling">
				<Typography variant="h6">Emotion / Styled components</Typography>
				<Typography paragraph>
					The latest version of Material UI has been updated to make use of
					Emotion as their default styling engine. There is however a thin
					wrapper around this so that we can make use of the styled-components
					pattern for component styling.
				</Typography>

				<Typography paragraph>
					Currently, the application has been set up to make use of a user's
					preferred color scheme (light or dark) and apply that to the
					application theme. If you want to remove this behavior search for and
					remove any references of `useMediaQuery('(prefers-color-scheme:
					dark)');`
				</Typography>
			</Card>

			<Card title="Routing">
				<Typography variant="h6">
					<a href="https://reactrouter.com/home">React Router v7</a>
				</Typography>
				<Typography paragraph>
					Routing throughout the application will be handled by React Router
				</Typography>
			</Card>

			<Card title="Compiling">
				<Typography variant="h6">
					<a href="https://react.dev/learn/react-compiler#usage-with-vite">
						React Compiler
					</a>
				</Typography>
				<Typography paragraph>
					React Compiler is a build-time only tool that automatically optimizes
					your React app. Learn how{" "}
					<a href="https://tonyalicea.dev/blog/understanding-react-compiler/">
						here
					</a>
					.
				</Typography>
			</Card>

			<Card title="Layers">
				<Typography variant="h6">Components</Typography>
				<Typography paragraph>
					This layer will house any reusable components which are not domain
					specific. Following the{" "}
					<a href="https://atomicdesign.bradfrost.com/chapter-2/#:~:text=Atomic%20design%20is%20atoms%2C%20molecules,parts%20at%20the%20same%20time.">
						atomic design principles
					</a>
					, this layer should contain the application's atoms and molecules.
				</Typography>
				<Typography paragraph>
					For the purposes of this project anything that references material
					design components, should be housed in this layer.
				</Typography>

				<Typography variant="h6">Icons</Typography>
				<Typography paragraph>
					Any icons that the application might be making use of should be
					abstracted through this layer.
				</Typography>

				<Typography variant="h6">Layout</Typography>
				<Typography paragraph>
					This layer will determine the general layout and routing of the
					application. In the below structure.
				</Typography>
				<LayoutContainer>
					<LayoutSubContainer>
						<LayoutLeftChildContainer></LayoutLeftChildContainer>
						<LayoutRightChildContainer>
							<Typography>App Bar</Typography>
						</LayoutRightChildContainer>
					</LayoutSubContainer>
					<LayoutSubContainer>
						<LayoutLeftChildContainer>
							<Typography>Navigation Bar</Typography>
						</LayoutLeftChildContainer>
						<LayoutRightChildContainer>
							<Typography>Main Content</Typography>
							<Typography>
								Any routing changes will render inside of this component
							</Typography>
						</LayoutRightChildContainer>
					</LayoutSubContainer>
				</LayoutContainer>

				<Typography variant="h6">Pages</Typography>
				<Typography paragraph>
					This layer consists of all the features that make up your application.
					For example in this demo, components that make up the Weather Forecast
					and Weather Forecast Listing features have been placed under a
					WeatherForecasts folder.
				</Typography>

				<Card title="Smart Containers / Dumb Components">
					<Typography paragraph>
						When building out features you should follow the Smart Containers /
						Dumb Components pattern i.e. you should have components, which only
						purpose is to make API calls, above your components that are
						rendering out the application. Have a look at the Weather Forecasts
						for an example.
					</Typography>
				</Card>

				<Typography variant="h6">Providers</Typography>
				<Typography paragraph>
					You can see this layer as your "Infrastructure" layer. Any kind of
					setup that needs to occur on any external packages should be done in
					this layer and then the rest of your application should reference that
					abstraction.
				</Typography>

				<Typography paragraph>
					Any api calls that the application makes should go into this layer as
					well. Have a look at the weatherForecasts folder.
				</Typography>

				<Typography variant="h6">Theme</Typography>
				<Typography paragraph>
					We will set up the material theme in this layer, for example, primary
					or secondary colors to the theme as well as any "global variables"
					that should be shared across components. These variables are then
					accessible through the use of styled-components.
				</Typography>
			</Card>
		</>
	);
};

export default React.memo(Home);
