import React from "react";
import { useNavigate } from "react-router";
import { GetWeatherForecastsType } from "./queries/types";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
	{ field: "id", headerName: "ID", width: 100 },
	{ field: "date", headerName: "Date", width: 250 },
	{ field: "temperatureC", headerName: "Temperature C", width: 250 },
	{ field: "temperatureF", headerName: "Temperature F", width: 250 },
	{ field: "summary", headerName: "Summary", width: 250 },
	{ field: "windSpeed", headerName: "Wind Speed", width: 250 },
];

type WeatherForecastListingProps = {
	weatherForecasts: GetWeatherForecastsType[];
};

/**
 * The weather forecast listing
 */
const WeatherForecastListing = ({
	weatherForecasts,
}: WeatherForecastListingProps) => {
	const navigate = useNavigate();

	return (
		<DataGrid
			rows={weatherForecasts}
			columns={columns}
			onRowClick={(value) => navigate(`../weather/${value.id}`)}
		/>
	);
};

export default React.memo(WeatherForecastListing);
