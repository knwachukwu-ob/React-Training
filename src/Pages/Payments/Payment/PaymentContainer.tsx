import React from "react";
import { useParams } from "react-router";
import useGetPayment from "./queries/useGetPayments";
import Payment from "./Payment";
import PaymentSkeleton from "./PaymentSkeleton";
import useSavePayment from "./commands/useSavePayment";

type PaymentParams = {
  id: string;
};

const PaymentContainer = () => {
  const { id } = useParams<PaymentParams>();
  const { data, isLoading } = useGetPayment();
  const mutation = useSavePayment();

  const numericId = parseInt(id || "0" ,10);

  const payment = Array.isArray(data)
    ? data.find((p) => p.paymentId == numericId)
    : data;


  return (
    <>
      {(isLoading || !payment) && <PaymentSkeleton />}
      {payment && <Payment payment={payment} mutation={mutation} />}
    </>
  );
};

export default React.memo(PaymentContainer);