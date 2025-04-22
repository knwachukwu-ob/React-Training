import MockAdapter from 'axios-mock-adapter/types';
import WEATHER_FORECAST_ENDPOINTS from '../../weatherForecastEndpoints';
import weatherForecastFakes from '../../weatherForecastFakes';

type SetupWeatherForecastMocksProps = {
  mock: MockAdapter;
};

const setupGetWeatherForecastsMocks = ({
  mock,
}: SetupWeatherForecastMocksProps) => {
  mock
    .onGet(`/${WEATHER_FORECAST_ENDPOINTS.WEATHER_FORECAST}`)
    .reply(200, weatherForecastFakes);
};

export default setupGetWeatherForecastsMocks;
