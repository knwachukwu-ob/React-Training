

export type LeaseDto = {
  
  leaseId: number;
  leaseName: string;
 
};

export type GetPaymentsListingType = {
  paymentId: number;
  amount: number;
  transactionDate: string; 
  leaseDto: LeaseDto[];
}