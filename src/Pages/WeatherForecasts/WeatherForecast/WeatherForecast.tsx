import { styled } from "@mui/system";
import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField } from "../../../Components";
import { SaveWeatherForecastType } from "./commands/types";
import { GetWeatherForecastType } from "./queries/types";
import { UseMutationResult } from "@tanstack/react-query";

const StyledBox = styled(Box)({
	display: "flex",
	flexDirection: "column",
});

type WeatherForecastProps = {
	weatherForecast?: GetWeatherForecastType;
	mutation?: UseMutationResult<
		GetWeatherForecastType,
		unknown,
		GetWeatherForecastType,
		unknown
	>;
};

const WeatherForecast = ({
	weatherForecast,
	mutation,
}: WeatherForecastProps) => {
	const { register, reset, handleSubmit } = useForm<GetWeatherForecastType>({
		defaultValues: weatherForecast,
	});

	useEffect(() => {
		reset(weatherForecast);
	}, [reset, weatherForecast]);

	const onSubmit = useCallback(
		(data: SaveWeatherForecastType) => mutation?.mutate(data),
		[mutation],
	);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<StyledBox>
				<TextField {...register("id")} label="Id" disabled />
				<TextField {...register("date")} label="Date" disabled />
				<TextField {...register("temperatureC")} label="Temperature C" />
				<TextField
					{...register("temperatureF")}
					label="Temperature F"
					disabled
				/>
				<TextField {...register("summary")} label="Summary" />
				<TextField {...register("windSpeed")} label="Wind Speed" />
				<Button type="submit" disabled={mutation?.isPending}>
					Submit (click me multiple times!)
				</Button>
			</StyledBox>
		</form>
	);
};

export default React.memo(WeatherForecast);
