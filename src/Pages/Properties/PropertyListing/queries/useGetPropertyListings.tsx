import { useQuery } from '@tanstack/react-query';
import QUERY_KEYS from '../../../../Providers/react-query/queryKeys';   
import PATHS from '../../../../Layout/Routes/paths';

const getPropertyListings = async () => {
  try {
    const apiURL = import.meta.env.VITE_API_URL ;
    const response = await fetch(`${apiURL}${PATHS.PROPERTY}`, {
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
    throw new Error('Failed to fetch property listings data');
  }
};

const useGetPropertyListings = () => { 
    const { data, isLoading, error } = useQuery({
        queryKey: [QUERY_KEYS.PROPERTIES],
        queryFn: getPropertyListings,
        retry: false, 
    });
    
    return { data, isLoading, error };
    };

export default useGetPropertyListings;