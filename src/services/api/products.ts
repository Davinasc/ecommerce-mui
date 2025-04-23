import { PRODUCTS_ENDPOINTS } from '@/constants/endpoints';
import type { ProductListResponse } from '@/types/api';

import http from './http/http-client';

async function list() {
  const { data } = await http.get<ProductListResponse>(PRODUCTS_ENDPOINTS.list);

  return data;
}

export default { list };
