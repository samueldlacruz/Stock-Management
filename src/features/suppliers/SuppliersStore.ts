import { observable, action, runInAction } from 'mobx';
import { SupplierModel } from './Supplier.type';
import { getSuppliers, postSupplier } from '../../api/suppliers';

export class SuppliersStore {
  @observable suppliers: SupplierModel[] = []

  @observable isLoading = true;

  @action
  fetchsuppliers = async () => {
   const suppliers = await getSuppliers();

   runInAction(() => {
     this.suppliers = suppliers
     this.isLoading = false
   })
  }

  @action
  addSupplier = async (supplier: SupplierModel) => {
   postSupplier(supplier);
   this.suppliers.push(supplier);
  }

}