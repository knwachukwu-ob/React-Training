import { useQuery } from '@tanstack/react-query';
import TENANTS_ENDPOINTS from '../../tenantEndpoints';

type GetTenantsListingProps = {
  id: number;
};

const getTenantsListing = async ({ id }: GetTenantsListingProps) => {
  
    const apiURL = import.meta.env.VITE_API_URL;
    
 
      const response = await fetch(`${apiURL}/${TENANTS_ENDPOINTS.TENANTS}/${id}`);
      
      if (!response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const errorData = await response.json();
          throw new Error(errorData.message || `Error ${response.status}: ${response.statusText}`);
        } else {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
      }
      
      return response.json();
    

};
  
const useGetTenantsListing = (params: GetTenantsListingProps) => {
  return useQuery({
    queryKey: ['tenantsListing', params.id],
    queryFn: () => getTenantsListing(params),
    retry: 1,
    enabled: !!params.id,
  });
};


export default useGetTenantsListing;