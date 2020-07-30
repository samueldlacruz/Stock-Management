import { observable, action, runInAction } from 'mobx';
import { SupplierModel } from './Supplier.type';
import { getSuppliers, postSupplier, deleteSupplier } from '../../api/suppliers';

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
  const newSupplier = await postSupplier(supplier);
   this.suppliers.push(newSupplier);
  }

  @action
  removeSupplier = async (id: number | undefined) => {
    deleteSupplier(id);
    this.suppliers = this.suppliers.filter(c => c.id !== id);
  }

}