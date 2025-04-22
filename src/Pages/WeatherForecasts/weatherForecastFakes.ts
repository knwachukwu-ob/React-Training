import { faker } from "@faker-js/faker";
import { UniqueEnforcer } from "enforce-unique";

const uniqueEnforcer = new UniqueEnforcer();

const weatherForecastFakes = Array.from({ length: 100 }, () => ({
	id: uniqueEnforcer.enforce(() => faker.string.numeric(3)),
	date: faker.date.recent(),
	temperatureC: faker.string.numeric(2),
	temperatureF: faker.string.numeric(3),
	summary: faker.word.adjective(),
	windSpeed: faker.string.numeric(2),
}));

export default weatherForecastFakes;
