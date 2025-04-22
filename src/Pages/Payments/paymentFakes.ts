import { faker } from "@faker-js/faker";
import { UniqueEnforcer } from "enforce-unique";

const uniqueEnforcer = new UniqueEnforcer();

const paymentFakes = Array.from({ length: 100 }, () => ({
	id: uniqueEnforcer.enforce(() => faker.string.numeric(3)),
	date: faker.date.recent(),
	amount: faker.number.int({ min: 5, max: 1000 }),
	leaseId: faker.number.int({ min: 1, max: 4 }),
}));

export default paymentFakes;
