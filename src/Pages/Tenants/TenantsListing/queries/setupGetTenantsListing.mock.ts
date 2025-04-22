import MockAdapter from 'axios-mock-adapter';
import TENANTS_ENDPOINTS from '../../tenantEndpoints';
import tenantFakes from '../../tenantListingFakes';

type SetupGetTenantsListingMocksProps = {
  mock: MockAdapter;
};

const SetupGetTenantsListingMocks = ({ mock }: SetupGetTenantsListingMocksProps) => {
  mock
    .onGet(`/${TENANTS_ENDPOINTS.TENANTS}`)
    .reply(200, tenantFakes);
};

export default SetupGetTenantsListingMocks;