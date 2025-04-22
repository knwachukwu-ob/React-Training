import MockAdapter from 'axios-mock-adapter/types';
import PAYMENTS_ENDPOINTS from '../../paymentEndpoints';

type SetupSavePaymentMocksProps = {
    mock: MockAdapter;
};

const setupSavePaymentMocks = ({ mock }: SetupSavePaymentMocksProps) => {
    mock.onPost(`/${PAYMENTS_ENDPOINTS.PAYMENTS}`).replyOnce(500);

    mock.onPost(`/${PAYMENTS_ENDPOINTS.PAYMENTS}`).replyOnce(400, {
        errors: {
            validationKey: ['data validation error'],
        },
    });

    mock.onPost(`/${PAYMENTS_ENDPOINTS.PAYMENTS}`).replyOnce(404, {
        detail: '404 not found.',
    });

    mock.onPost(`/${PAYMENTS_ENDPOINTS.PAYMENTS}`).reply(200);
};

export default setupSavePaymentMocks;