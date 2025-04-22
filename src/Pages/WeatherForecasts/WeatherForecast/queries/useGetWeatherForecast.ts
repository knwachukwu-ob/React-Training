import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../../../Providers/react-query/queryKeys";
import WEATHER_FORECAST_ENDPOINTS from "../../weatherForecastEndpoints";
import { GetWeatherForecastType } from "./types";
import apiInstance from "../../../../Providers/api/apiInstance";

type GetWeatherForecastProps = {
	id: number;
};

const getWeatherForecast = ({ id }: GetWeatherForecastProps) => {
	return apiInstance
		.get<GetWeatherForecastType>(
			`${WEATHER_FORECAST_ENDPOINTS.WEATHER_FORECAST}/${id}`,
		)
		.then((response) => response.data);
};

type UseGetWeatherForecastProps = {
	id: number;
};

const useGetWeatherForecast = ({ id }: UseGetWeatherForecastProps) => {
	const { data, isLoading, isFetching } = useQuery({
		queryKey: [QUERY_KEYS.WEATHER_FORECAST],
		queryFn: () => getWeatherForecast({ id }),
	});

	return { data, isLoading, isFetching };
};

export default useGetWeatherForecast;
