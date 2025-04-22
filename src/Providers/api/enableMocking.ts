import MockAdapter from 'axios-mock-adapter';
import setupSaveWeatherForecastMocks from '../../Pages/WeatherForecasts/WeatherForecast/commands/setupSaveWeatherForecast.mocks';
import setupGetWeatherForecastMocks from '../../Pages/WeatherForecasts/WeatherForecast/queries/setupGetWeatherForecast.mocks';
import setupGetWeatherForecastsMocks from '../../Pages/WeatherForecasts/WeatherForecastListing/queries/setupGetWeatherForecasts.mocks';
import apiInstance from './apiInstance';
import setupGetPaymentsMocks from '../../Pages/Payments/Payment/queries/setupGetPayments.mock';


const mock = new MockAdapter(apiInstance, { delayResponse: 250 });

const enableMocking = () => {
  setupSaveWeatherForecastMocks({ mock });
  setupGetWeatherForecastMocks({ mock });
  setupGetWeatherForecastsMocks({ mock });
  setupGetPaymentsMocks({ mock });
};

export default enableMocking;
