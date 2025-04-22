import { faker } from "@faker-js/faker";
import { UniqueEnforcer } from "enforce-unique";

const uniqueEnforcer = new UniqueEnforcer();

const tenantListingFakes = Array.from({ length: 100 }, () => ({
	tenantId: uniqueEnforcer.enforce(() => faker.string.numeric(3)),
	tenantName: faker.company.name(),
	tenantStatus: faker.helpers.arrayElement(['Active', 'Inactive', 'Pending']),
	subsidiaryName: faker.company.name(),
	parentName: faker.person.fullName(),
}));

export default tenantListingFakes;
