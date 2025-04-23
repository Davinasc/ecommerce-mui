import { PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { CartContext, type ICartContext } from './CartContext';
import { Product } from '@/types/api';

export default function CartProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = useCallback((product: Product) => setProducts(prevProducts => [...prevProducts, product]), []);

  const removeProduct = useCallback((productId: Product['id']) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
  }, []);

  const context: ICartContext = useMemo(
    () => ({ products, productsCount: products.length, addProduct, removeProduct }),
    [products, addProduct, removeProduct]
  );

  return <CartContext.Provider value={context}>{children}</CartContext.Provider>;
}
