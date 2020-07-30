import { SupplierModel } from '../features/suppliers/Supplier.type';
import Axios from 'axios';

const baseUrl = 'https://stockmanagement2018.azurewebsites.net/api/suppliers/';

const headers = {
  Accept: "application/json",
 "Content-Type": "application/json"
}

export const getSuppliers = async () => {
  const suppliers = await Axios.get<SupplierModel[]>(baseUrl);
  return suppliers.data;
}

export const postSupplier = async (supplier: SupplierModel) => {
 const newSupplier = await Axios.post<SupplierModel>(baseUrl, supplier, { headers });
 return newSupplier.data;
}

export const deleteSupplier = async (id: number | undefined) => {
  const supplierUrl = `${baseUrl}/${id}`;
  
  await Axios.delete<SupplierModel>(supplierUrl);
}

export const updateSupplier = async (supplier: SupplierModel) => {
  const suppliersUrl = `${baseUrl}/${supplier.id}`;

  const updatedSuppliers = await Axios.put<SupplierModel>(suppliersUrl, supplier, { headers });
  return updatedSuppliers.data;
}