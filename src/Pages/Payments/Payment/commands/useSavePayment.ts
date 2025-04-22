import {useMutation} from '@tanstack/react-query';
import apiInstance from '../../../../Providers/api/apiInstance';
import withToast from '../../../../Providers/react-toastify/withToast';
import PAYMENTS_ENDPOINTS from '../../paymentEndpoints';
import { SavePaymentsType } from './types';

const savePayment = (payment: SavePaymentsType) => {
    return withToast(
        apiInstance.post<SavePaymentsType>(
            `${PAYMENTS_ENDPOINTS.PAYMENTS}/${payment.paymentId}`,
            payment,
        ),
    ).then((response) => response.data);
};

const useSavePayment = () => {
    return useMutation({
        mutationFn: (payment: SavePaymentsType) => savePayment(payment),
    });
};

export default useSavePayment;