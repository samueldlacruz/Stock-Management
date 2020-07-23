import React, { useEffect } from 'react';
import { ListContainer } from '../shared/';
import Typography from '@material-ui/core/Typography';
import { SupplierModel } from '../../interfaces/SupplierModel';
import SupplierCard from '../SupplierCard';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { fecthSuppliers } from '../../store/SuppliersSlice';


const SuppliersList = () => {

    const dispatch = useDispatch();

    const { isLaoding, suppliers } = useSelector<RootState, RootState["suppliers"]>(state => state.suppliers);
    
    useEffect(() => {
      dispatch(fecthSuppliers())
    }, [])

    if (isLaoding) {
      return <Typography variant="h5" color="primary">Loading...</Typography>
    }

    return (
     <ListContainer title="suppliers">
      {suppliers.map((supplier: SupplierModel, index: number) => (
        <SupplierCard 
        key={`id-${index}`}
        name={supplier.name}
        phone={supplier.phone}
        email={supplier.email} >
        </SupplierCard>
      ))}
      </ListContainer>
    )
}

export default SuppliersList;
