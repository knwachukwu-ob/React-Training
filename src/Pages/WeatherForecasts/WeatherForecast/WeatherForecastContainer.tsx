import React from "react";
import { useParams } from "react-router";
import useSaveWeatherForecast from "./commands/useSaveWeatherForecast";
import useGetWeatherForecast from "./queries/useGetWeatherForecast";
import WeatherForecast from "./WeatherForecast";
import WeatherForecastSkeleton from "./WeatherForecastSkeleton";

type WeatherForecastParams = {
	id: string;
};

const WeatherForecastContainer = () => {
	const { id } = useParams<WeatherForecastParams>();

	const { data, isLoading, isFetching } = useGetWeatherForecast({
		id: parseInt(id || ""),
	});

	const mutation = useSaveWeatherForecast();

	return (
		<>
			{(isLoading || isFetching) && <WeatherForecastSkeleton />}
			{!isLoading && !isFetching && (
				<WeatherForecast weatherForecast={data} mutation={mutation} />
			)}
		</>
	);
};

export default React.memo(WeatherForecastContainer);
