export type GetWeatherForecastsType = {
  id: number | string;
  date: Date;
  temperatureC: number | string;
  temperatureF: number | string;
  summary?: string;
  windSpeed?: number | string;
};
