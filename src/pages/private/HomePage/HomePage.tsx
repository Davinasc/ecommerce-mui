import useSWR from 'swr';

import { PRODUCTS_ENDPOINTS } from '@/constants';
import { productsApi } from '@/services/api';
import { ProductListItem } from '@/types/api';

export default function HomePage() {
  const { data, error, isLoading } = useSWR(PRODUCTS_ENDPOINTS.list, productsApi.list);

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Failed to load products.</p>;

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <h2>Products</h2>
      <ul>
        {data?.map((product: ProductListItem) => <li key={product.id}>{product.name}</li>) ?? (
          <li>No products found.</li>
        )}
      </ul>
    </div>
  );
}
