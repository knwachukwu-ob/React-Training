import React from "react";
import { useParams } from "react-router";
import useCreatePayment from "./commands/useCreatePayment";
import PaymentCreate from "./PaymentCreate";

type PaymentCreateParams = {
    amount?: string;
    transactionDate?: string;
    leaseIds?: string;
};

const PaymentCreateContainer = () => {
    const { amount, transactionDate, leaseIds } = useParams<PaymentCreateParams>();
    const createPaymentMutation = useCreatePayment();

    const parsedAmount = Number(amount) || 0; 

    const leaseIdsArray = leaseIds
        ? leaseIds.split(",").map(id => {
            const parsedId = parseInt(id, 10);
            return isNaN(parsedId) ? null : parsedId; 
        }).filter(id => id !== null) as number[] 
        : [];

    return (
        <PaymentCreate
            payment={{
                amount: parsedAmount,
                transactionDate: transactionDate || "",
                leaseIds: leaseIdsArray,
            }}
            mutation={createPaymentMutation}
        />
    );
};

export default React.memo(PaymentCreateContainer);