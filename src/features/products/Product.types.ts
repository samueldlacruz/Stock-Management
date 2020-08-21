export type ProductModel = {
  sku: string;
  categoryId: number;
  name: string;
  description: string;
  photoUri: string;
  alertQuantity?: number | null; 
  sellingPrice: number;
  units: number;
  createdDate?: string;
  updated?: string;
  quantity: number;
}

export type NewProductModel = {
  sku: string;
  categoryId: number;
  image: any;
  name: string;
  description: string;
  units: number;
  sellingPrice: number;
  quantity: number;
}