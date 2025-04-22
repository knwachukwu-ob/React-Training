export type SaveLeaseType = {
  leaseId: string;
  tenantName: string;
};

export type SavePaymentsType = {
  paymentId: number;
  transactionDate: string;
  amount: number;
  leaseDto?: LeaseType[];
};