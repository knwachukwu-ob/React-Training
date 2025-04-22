import React from 'react';
import useGetWeatherForecasts from './queries/useGetWeatherForecasts';
import WeatherForecastListing from './WeatherForecastListing';
import WeatherForecastListingSkeleton from './WeatherForecastListingSkeleton';

const WeatherForecastListingContainer = () => {
  const { data, isLoading } = useGetWeatherForecasts();

  return (
    <>
      {isLoading && <WeatherForecastListingSkeleton />}
      {!isLoading && <WeatherForecastListing weatherForecasts={data || []} />}
    </>
  );
};

export default React.memo(WeatherForecastListingContainer);
