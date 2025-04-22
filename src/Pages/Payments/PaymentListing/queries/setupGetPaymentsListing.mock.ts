import MockAdapter from 'axios-mock-adapter';
import PAYMENTS_ENDPOINTS from '../../paymentEndpoints';
import paymentFakes from '../../paymentFakes';

type SetupGetPaymentsListingMocksProps = {
  mock: MockAdapter;
};

const setupGetPaymentsListingMocks = ({ mock }: SetupGetPaymentsListingMocksProps) => {
  mock
    .onGet(`/${PAYMENTS_ENDPOINTS.PAYMENTS}`)
    .reply(200, paymentFakes);
};

export default setupGetPaymentsListingMocks;