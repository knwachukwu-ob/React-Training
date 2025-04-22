export interface LeaseDto {
  leaseId: number;
  tenantName: string;
}

export interface GetPaymentsListingType {
  paymentId: number;
  amount: number;
  transactionDate: string; // This is a date/time string
  leaseDto: LeaseDto[];
}