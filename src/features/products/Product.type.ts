export type ProductModel = {
  sku: string;
  categoryId: number;
  name: string;
  description: string;
  photoUri: string;
  alertQuantity?: number | null; 
  sellingPrice: number;
  marginProfitability?: number | null;
  units: number;
}

export interface NewProductModel {
  sku: string;
  categoryId: number;
  image: any;
  name: string;
  description: string;
  units: number;
  sellingPrice: number;
}