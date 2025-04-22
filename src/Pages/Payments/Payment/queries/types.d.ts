export type LeaseType = {
  leaseId: string;
  tenantName: string;
};

export type GetPaymentsType = {
  paymentId: number;
  transactionDate: dateTimeString;
  amount: number;
  leaseDto?: LeaseType[];
};