export interface ProductListItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export type ProductListResponse = ProductListItem[];
