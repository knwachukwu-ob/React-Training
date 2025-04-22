import { useQuery } from '@tanstack/react-query';
import QUERY_KEYS from '../../../../Providers/react-query/queryKeys';
import { GetPaymentsType } from './types';


const apiURL = import.meta.env.VITE_API_URL 

// Fetch all payments
const getPayments = async () => {
    const response = await fetch(`${apiURL}/Payments`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        mode:'cors',
        credentials: 'include', 
    });

    if (!response.ok) {
        throw new Error('Failed to fetch all payments');
    }
    
    return response.json() as Promise<GetPaymentsType[]>;
};

const useGetPayments = () => {
    const { data, isLoading, error } = useQuery({
      queryKey: [QUERY_KEYS.PAYMENTS],
      queryFn: getPayments,
      retry: false, 
    });
  
    return { data, isLoading, error };
  };

export default useGetPayments;
