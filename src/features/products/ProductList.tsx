import React, { useEffect } from 'react';
import { ProductModel } from './Product.types';
import ProductCard from './ProductCard';
import  ListContainer from '../../components/List';
import { useObserver } from 'mobx-react-lite';
import { useStores } from '../../store/StoresProvider';
import 'mobx-react-lite/batchingForReactDom';

const ProductList = () => {
   const  { productsStore } = useStores()

   const { fetchProducts } = productsStore;

   useEffect(() => {
    fetchProducts();
   },[])

    return useObserver(() => {
      const { products, isLoading } = productsStore;

       if(isLoading) {
           return <>loading ...</>
       }
       
       return (
        <ListContainer title="products">
        {products.map((product: ProductModel, index: number) => (
            <ProductCard 
            key={`id-${index}`} 
            {...product} />
        ))}
        </ListContainer>           
       );

    });
};

export default ProductList;