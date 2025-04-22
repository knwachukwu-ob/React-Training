import QUERY_KEYS from "../../../../Providers/react-query/queryKeys";
import { GetWeatherForecastsType } from "./types";
import WEATHER_FORECAST_ENDPOINTS from "../../weatherForecastEndpoints";
import { useQuery } from "@tanstack/react-query";
import apiInstance from "../../../../Providers/api/apiInstance";

const getWeatherForecasts = () => {
	return apiInstance
		.get<GetWeatherForecastsType[]>(WEATHER_FORECAST_ENDPOINTS.WEATHER_FORECAST)
		.then((response) => response.data);
};

const useGetWeatherForecasts = () => {
	const { data, isLoading } = useQuery({
		queryKey: [QUERY_KEYS.WEATHER_FORECASTS],
		queryFn: () => getWeatherForecasts(),
	});

	return { data, isLoading };
};

export default useGetWeatherForecasts;
