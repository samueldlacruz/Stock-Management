import { CategoryModel } from '../features/categories/CategoryModel';
import Axios from 'axios';

const baseUrl = 'https://stockmanagement2018.azurewebsites.net/api/categories/';

export const getCategories = async (): Promise<CategoryModel[]> => {
  const response = await Axios.get<CategoryModel[]>(baseUrl);
  return response.data;
}

export const getCategoryById = async (id: number): Promise<CategoryModel> => {
  const response = await Axios.get<CategoryModel>(`${baseUrl} ${id}`);
  return response.data;
}

export const getCategoryNameById = async (id: number) => {
  const response = await Axios.get<CategoryModel>(`${baseUrl} ${id}`);
  return response.data.name;
}

export const postCategory = (category: CategoryModel) => {
  const headers = {
    Accept: "application/json",
   "Content-Type": "application/json"
  }

  Axios.post<CategoryModel>(baseUrl, category, { headers });

}