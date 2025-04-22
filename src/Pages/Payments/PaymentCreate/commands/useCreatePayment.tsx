import { useMutation } from "@tanstack/react-query";
import withToast from "../../../../Providers/react-toastify/withToast";
import PAYMENT_ENDPOINTS from "../../paymentEndpoints";
import { CreatePaymentType } from "./types";

const createPayment = (payment: CreatePaymentType) => {
    const apiurl = import.meta.env.VITE_API_URL;

    
    const requestBody = {
        amount: Number(payment.amount), 
        transactionDate: payment.transactionDate, 
        leaseIds: Array.isArray(payment.leaseIds)
            ? payment.leaseIds.map(Number)  
            : typeof payment.leaseIds === 'string'
                ? (payment.leaseIds as string).split(',').map(id => Number(id.trim())) // If string, convert to array
                : [] 
    };

    console.log("Final request body:", JSON.stringify(requestBody));

    return withToast(
        fetch(`${apiurl}/${PAYMENT_ENDPOINTS.PAYMENTS}`, {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        }).then(async (response) => {
            if (!response.ok) {
                
                const errorText = await response.text();
                console.error("API error response:", errorText);
                throw new Error(`Failed to create payment: ${response.status} ${response.statusText}`);
            }
            return response.json() as Promise<CreatePaymentType>;
        })
    );
};

export const useCreatePayment = () => {
    return useMutation({
        mutationFn: (payment: CreatePaymentType) => createPayment(payment),
    });
};

export default useCreatePayment;