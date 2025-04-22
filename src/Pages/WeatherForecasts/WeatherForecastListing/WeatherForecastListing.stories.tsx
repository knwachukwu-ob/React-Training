import { faker } from "@faker-js/faker";
import { UniqueEnforcer } from "enforce-unique";
import { Meta, StoryObj } from "@storybook/react";
import WeatherForecastListing from "./WeatherForecastListing";
import { MemoryRouter } from "react-router-dom";

const uniqueEnforcer = new UniqueEnforcer();

const meta: Meta<typeof WeatherForecastListing> = {
	title: "Pages/WeatherForecastListing",
	component: WeatherForecastListing,
	argTypes: {
		weatherForecasts: [],
	},
	decorators: [
		(Story) => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		),
	],
};

export default meta;
type Story = StoryObj<typeof WeatherForecastListing>;

export const Primary: Story = {
	args: {
		weatherForecasts: Array.from({ length: 100 }, () => ({
			id: uniqueEnforcer.enforce(() => faker.string.numeric(3)),
			date: faker.date.recent(),
			temperatureC: faker.string.numeric(2),
			temperatureF: faker.string.numeric(3),
			summary: faker.word.adjective(),
			windSpeed: faker.string.numeric(2),
		})),
	},
	render: (args) => (
		<div style={{ height: "400px" }}>
			<WeatherForecastListing {...args} />
		</div>
	),
};

export const NoRecords: Story = {
	...Primary,
	args: {
		weatherForecasts: [],
	},
};
