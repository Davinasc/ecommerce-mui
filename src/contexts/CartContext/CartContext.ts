import { Product } from '@/types/api';
import { createContext, useContext } from 'react';

export interface ICartContext {
  products: Product[];
  productsCount: number;
  addProduct: (product: Product) => void;
  removeProduct: (productId: Product['id']) => void;
}

export const CartContext = createContext<ICartContext | undefined>(undefined);

CartContext.displayName = 'CartContext';

export function useCartContext() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCartContext must be used within a CartContext');
  }

  return context;
}
