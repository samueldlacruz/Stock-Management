import { SupplierModel } from '../features/suppliers/Supplier.type';

const baseUrl = 'https://stockmanagement2018.azurewebsites.net/api/suppliers/';

export async function getSuppliers(): Promise<SupplierModel[]> {
    const response = await fetch(baseUrl);
    const suppliers = await response.json();

    return suppliers;
}