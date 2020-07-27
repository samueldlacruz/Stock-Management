import { ProductModel } from '../features/products/Product.type';
import Axios from 'axios';

const baseUrl = 'https://stockmanagement2018.azurewebsites.net/api/products/';

export const getProducts = async (): Promise<ProductModel[]> => {
  const response = await Axios.get<ProductModel[]>(baseUrl);
  return response.data;
}

export const postProduct = async (product: ProductModel) => {
  const headers = {
    Accept: "application/json",
   "Content-Type": "application/json"
  }

 await Axios.post<ProductModel>(baseUrl, product, { headers });

}