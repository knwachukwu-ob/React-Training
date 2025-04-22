import MockAdapter from "axios-mock-adapter/types";
import find from "lodash/find";
import WEATHER_FORECAST_ENDPOINTS from "../../weatherForecastEndpoints";
import weatherForecastFakes from "../../weatherForecastFakes";

type SetupWeatherForecastMocksProps = {
	mock: MockAdapter;
};

const setupGetWeatherForecastMocks = ({
	mock,
}: SetupWeatherForecastMocksProps) => {
	mock
		.onGet(new RegExp(`/${WEATHER_FORECAST_ENDPOINTS.WEATHER_FORECAST}/\\d+`))
		.reply((config) => {
			const id = config.url?.split("/")[1];

			return [200, find(weatherForecastFakes, (x) => x.id === id)];
		});
};

export default setupGetWeatherForecastMocks;
