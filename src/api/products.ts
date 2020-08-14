import { ProductModel, NewProductModel } from '../features/products/Product.type';
import Axios from 'axios';
import { uploadImage } from './upload';

const baseUrl = 'https://stockmanagement2018.azurewebsites.net/api/products/';

const headers = {
  Accept: "application/json",
 "Content-Type": "application/json"
}

export const getProducts = async (): Promise<ProductModel[]> => {
  const response = await Axios.get<ProductModel[]>(baseUrl);
  return response.data;
}

export const postProduct = async (product: NewProductModel) => {

  const { name, categoryId, description, sku, image, units, sellingPrice  } = product;

  const photoUri = await uploadImage(image);

  const newProduct: ProductModel = {
   name, 
   categoryId,
   description, 
   sku, 
   units,
   sellingPrice,
   photoUri,
   alertQuantity: null,
   marginProfitability: null
  }

  const newProd = await Axios.post<ProductModel>(baseUrl, newProduct, { headers });
  return newProd.data;

}