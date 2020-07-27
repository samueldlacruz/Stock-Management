import { SupplierModel } from '../features/suppliers/Supplier.type';
import Axios from 'axios';

const baseUrl = 'https://stockmanagement2018.azurewebsites.net/api/suppliers/';

export const getSuppliers = async (): Promise<SupplierModel[]> => {
  const response = await Axios.get<SupplierModel[]>(baseUrl);
  return response.data;
}

export const postSupplier = (supplier: SupplierModel) => {
  const headers = {
    Accept: "application/json",
   "Content-Type": "application/json"
  }

  Axios.post<SupplierModel>(baseUrl, supplier, { headers });

}