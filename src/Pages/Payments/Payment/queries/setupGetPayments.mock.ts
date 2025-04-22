import MockAdaptor from 'axios-mock-adapter/'; 
import find from 'lodash/find';
import PAYMENTS_ENDPOINTS from '../../paymentEndpoints';
import paymentFakes from '../../paymentFakes';

type SetupGetPaymentsMocksProps = {
    mock: MockAdaptor;
};

const setupGetPaymentsMocks = ({ mock }: SetupGetPaymentsMocksProps) => {
    mock
        .onGet(new RegExp(`/${PAYMENTS_ENDPOINTS.PAYMENTS}/\\d+`))
        .reply((config) => {
            const id = config.url?.split('/')[1];

            return [200, find(paymentFakes, (x) => x.id === id)];
        });
}; 

export default setupGetPaymentsMocks;