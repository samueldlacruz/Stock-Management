import React, { useEffect } from 'react';
import  ListContainer from '../../components/List';
import Typography from '@material-ui/core/Typography';
import { SupplierModel } from './Supplier.type';
import SupplierCard from './SupplierCard';
import { useObserver } from 'mobx-react-lite';
import { useStores } from '../../store/StoresProvider';
import 'mobx-react-lite/batchingForReactDom';

const SuppliersList = () => {
   const { suppliersStore } = useStores();
   
   const { fetchsuppliers } = suppliersStore;

   useEffect(() => {
     fetchsuppliers();
   },[])

   return useObserver(() => {
    const { suppliers, isLoading } = suppliersStore;
   
    if(isLoading) {
      return <Typography color="primary" variant="subtitle1">Loading ...</Typography>
     }
     
    return (
     <ListContainer title="suplidores">
      {suppliers.map((supplier: SupplierModel, index: number) => (
        <SupplierCard 
        key={`id-${index}`}
        {...supplier}>
        </SupplierCard>
      ))}
      </ListContainer>
    );

   });

}

export default SuppliersList;
