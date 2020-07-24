import { CategoryModel } from '../features/categories/CategoryModel';

const baseUrl = 'https://stockmanagement2018.azurewebsites.net/api/categories/';

export async function getCategories(): Promise<CategoryModel[]> {
    const response = await fetch(baseUrl);
    const categories = await response.json();

    return categories;
}

export async function addCategory(paylaod: CategoryModel): Promise<any> {
   await fetch(baseUrl, {
     method: "POST",
     headers: {
        'Content-Type': 'application/json'
     },
     body: JSON.stringify(paylaod)
    });
}

export async function deleteCategory(id: number | undefined): Promise<any> {
    console.log(id);
    
    await fetch(`${baseUrl}${id}`, { 
     method: "DELETE", 
     headers: {
        'Content-Type': 'application/json'
     }
    });
}

export async function updateCategory(id: number, data: CategoryModel): Promise<any> {
  
  await fetch(`${baseUrl}${id}`, {
    method: "POST",
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}