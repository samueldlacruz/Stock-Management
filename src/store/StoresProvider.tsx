import React, { PropsWithChildren } from 'react';
import {  CategoriesStore } from '../features/categories/CategoriesStore';
import { EmployeesStore } from '../features/employees/EmployeesStore';
import { SuppliersStore } from '../features/suppliers/SuppliersStore';
import { ProductsStore } from '../features/products/ProductsStore';

type StoresContextValue = {
    categoriesStore: CategoriesStore;
    employeesStore: EmployeesStore;
    suppliersStore: SuppliersStore;
    productsStore: ProductsStore;
}

const StoresContext = React.createContext<StoresContextValue>({} as StoresContextValue);

export const StoresProvider: React.FC<PropsWithChildren<{}>> = ({children}) => {
 const categoriesStore = new CategoriesStore();
 const employeesStore = new EmployeesStore();
 const suppliersStore = new SuppliersStore();
 const productsStore = new ProductsStore();

 return (
    <StoresContext.Provider 
    value={{ 
    categoriesStore, 
    employeesStore, 
    suppliersStore, 
    productsStore 
    }}>
        {children}
    </StoresContext.Provider>
 );
};

export const useStores = () => React.useContext(StoresContext); 