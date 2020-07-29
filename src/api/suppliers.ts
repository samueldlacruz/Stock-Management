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
 await Axios.post<SupplierModel>(baseUrl, supplier, { headers });
}

export const deleteSupplier = async (id: number) => {
  const supplierUrl = `${baseUrl}/${id}`;
  await Axios.delete<SupplierModel>(supplierUrl);
}