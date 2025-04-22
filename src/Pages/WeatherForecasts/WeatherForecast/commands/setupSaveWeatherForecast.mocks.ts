import MockAdapter from "axios-mock-adapter/types";
import WEATHER_FORECAST_ENDPOINTS from "../../weatherForecastEndpoints";

type SetupWeatherForecastMocksProps = {
	mock: MockAdapter;
};

const setupSaveWeatherForecastMocks = ({
	mock,
}: SetupWeatherForecastMocksProps) => {
	mock
		.onPost(`/${WEATHER_FORECAST_ENDPOINTS.WEATHER_FORECAST_UPDATE}`)
		.replyOnce(500);

	mock
		.onPost(`/${WEATHER_FORECAST_ENDPOINTS.WEATHER_FORECAST_UPDATE}`)
		.replyOnce(400, {
			errors: {
				validationKey: ["data validation error"],
			},
		});

	mock
		.onPost(`/${WEATHER_FORECAST_ENDPOINTS.WEATHER_FORECAST_UPDATE}`)
		.replyOnce(404, {
			detail: "404 not found.",
		});

	mock
		.onPost(`/${WEATHER_FORECAST_ENDPOINTS.WEATHER_FORECAST_UPDATE}`)
		.reply(200);
};

export default setupSaveWeatherForecastMocks;
