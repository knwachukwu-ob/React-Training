import { useMutation } from "@tanstack/react-query";
import apiInstance from "../../../../Providers/api/apiInstance";
import withToast from "../../../../Providers/react-toastify/withToast";
import WEATHER_FORECAST_ENDPOINTS from "../../weatherForecastEndpoints";
import { SaveWeatherForecastType } from "./types";

const saveWeatherForecast = (weatherForecast: SaveWeatherForecastType) => {
	return withToast(
		apiInstance.put<SaveWeatherForecastType>(
			`${WEATHER_FORECAST_ENDPOINTS.WEATHER_FORECAST_UPDATE}/${weatherForecast.id}`,
			weatherForecast,
		),
	).then((response) => response.data);
};

const useSaveWeatherForecast = () => {
	return useMutation({
		mutationFn: (weatherForecast: SaveWeatherForecastType) =>
			saveWeatherForecast(weatherForecast),
	});
};

export default useSaveWeatherForecast;
