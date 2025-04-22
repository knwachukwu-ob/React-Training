import { useQuery } from '@tanstack/react-query';
import QUERY_KEYS from '../../../../Providers/react-query/queryKeys';


const getPaymentsListing = async () => {
  try {
    const apiURL = import.meta.env.VITE_API_URL ;
    const response = await fetch(`${apiURL}/Payments`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors', 
      credentials: 'include',
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch payments data');
  }
};

const useGetPaymentsListing = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.PAYMENTS],
    queryFn: getPaymentsListing,
    retry: false, // Disable retries to avoid multiple error messages
  });

  return { data, isLoading, error };
};

export default useGetPaymentsListing;