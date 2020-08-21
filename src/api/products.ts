import { ProductModel, NewProductModel } from '../features/products/Product.types';
import Axios from 'axios';
import { uploadImage, deleteImage } from './Images';

const baseUrl = 'https://stockmanagement2017.azurewebsites.net/api/products/';

const headers = {
  Accept: "application/json",
 "Content-Type": "application/json"
}

export const getProducts = async (): Promise<ProductModel[]> => {
  const response = await Axios.get<ProductModel[]>(baseUrl);
  return response.data;
}

export const postProduct = async (product: NewProductModel) => {

  const { name, categoryId, description, sku, image, units, sellingPrice, quantity  } = product;

  const photoUri = await uploadImage(image);

  const newProduct: ProductModel = {
   name, 
   categoryId,
   description, 
   sku, 
   units,
   sellingPrice,
   photoUri,
   quantity,
   alertQuantity: null
  }

  const newProd = await Axios.post<ProductModel>(baseUrl, newProduct, { headers });
  return newProd.data;

}

export const updateProduct = async (product: ProductModel) => {
  const productUrl = `${baseUrl}/${product.sku}`;

  const updatedProduct = await Axios.put<ProductModel>(productUrl, product, { headers });
  return updatedProduct.data;
}

export const deleteProduct = async (sku: string, imageUrl: string) => {
  const productUrl = `${baseUrl}/${sku}`;

  await Axios.delete<ProductModel>(productUrl);
  await deleteImage(imageUrl);
}