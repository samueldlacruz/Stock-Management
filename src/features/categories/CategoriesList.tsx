import React, { useEffect } from 'react';
import { CategoryModel } from './CategoryModel';
import CategoryCard from './CategoryCard';
import  ListContainer from '../../components/List';
import { useObserver } from 'mobx-react-lite';
import { useStores } from '../../store/StoresProvider';
import 'mobx-react-lite/batchingForReactDom';

const CategoriesList = () => {

    const  { categoriesStore } = useStores()

    const { fetchCategories } = categoriesStore;

    useEffect(() => {
        fetchCategories();
    },[])

    return useObserver(() => {
        const { categories, isLoading } = categoriesStore;

        if(isLoading) {
            return <>loading ...</>
        }
        
        return (
            <ListContainer title="categorias">
            {categories.map((category: CategoryModel, index: number) => (
                <CategoryCard 
                key={`id-${index}`} 
                {...category}></CategoryCard>
            ))}
            </ListContainer>           
        );

    });
};

export default CategoriesList;