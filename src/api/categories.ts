import { CategoryModel } from '../features/categories/CategoryModel';
import Axios from 'axios';

const baseUrl = 'https://stockmanagement2017.azurewebsites.net/api/categories/';

const headers = {
  Accept: "application/json",
 "Content-Type": "application/json"
}

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

export const postCategory = async (category: CategoryModel) => {
 const newCategory = await Axios.post<CategoryModel>(baseUrl, category, { headers });
 return newCategory.data;
}

export const deleteCategory = async (id: number | undefined) => {
  const categoryUrl = `${baseUrl}/${id}`;

  await Axios.delete<CategoryModel>(categoryUrl);
}

export const updateCategory = async (category: CategoryModel) => {
  const categoryUrl = `${baseUrl}/${category.id}`;

  const updatedCategory = await Axios.put<CategoryModel>(categoryUrl, category, { headers });
  return updatedCategory.data;
}