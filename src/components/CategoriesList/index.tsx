import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { CategoryModel } from '../../interfaces/CategoryModel';
import CategoryCard from '../CategoryCard';
import { ListContainer } from '../shared/';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { fecthCategories } from '../../store/CategoriesSlice';

const CategoriesList = () => {
 
    const dispatch = useDispatch();

    const { isLaoding, categories } = useSelector<RootState, RootState["categories"]>(state => state.categories);
    
    useEffect(() => {
      dispatch(fecthCategories())
    }, [])

    if (isLaoding) {
      return <Typography variant="h5" color="primary">Loading...</Typography>
    }

    return (
    <ListContainer title="categories">
    {categories.map((category: CategoryModel, index: number) => (
        <CategoryCard 
        key={`id-${index}`} 
        {...category}></CategoryCard>
    ))}
    </ListContainer>
    )
}

export default CategoriesList;