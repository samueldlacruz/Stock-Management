import { CategoryModel } from '../features/categories/CategoryModel';
import { SupplierModel } from '../features/suppliers/SupplierModel';

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

const suppliers: SupplierModel[] = [
    {name: 'ISM (Kola Real)', phone:'8297156160', email: 'kolareal@rr.com'},
    {name: 'Frito Lays', phone:'8097054160', email: 'fritolay@rr.com'}
]

export const getSuppliers = async (): Promise<SupplierModel[]> => ( suppliers );
