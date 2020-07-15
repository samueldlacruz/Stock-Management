import { CategoryModel } from '../interfaces/CategoryModel';

const categories: CategoryModel[] = [
    {name: 'candiesKlk', description: 'description candies'},
    {name: 'snack', description: 'description snack'},
    {name: 'soda', description: 'description soda'},
    {name: 'cleaning product', description: 'description cleaning product'}
];
export const getCategories = async (): Promise<CategoryModel[]> => ( categories );

export const addCategory = () => {
    console.log('klk se agrego una nueva categoria');
};
