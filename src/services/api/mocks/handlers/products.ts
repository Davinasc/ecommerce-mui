import { delay, http, HttpResponse } from 'msw';

import products from '../data/products.json';

const BASE_URL = 'products';

const handlers = [
  http.get(`${BASE_URL}`, async () => {
    await delay(1000);

    return HttpResponse.json(products, { status: 200 });
  }),
];

export default handlers;
