import React, { useEffect } from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Box from '@material-ui/core/Box';
import { CategoryModel } from '../../interfaces/CategoryModel';
import CategoryCard from '../CategoryCard';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../stores/store';
import { fecthCategories } from '../../stores/CategoriesSlice';
import useStyles from './styles';

const CategoriesList = () => {
    const classes = useStyles();
    
    const dispatch = useDispatch();

    const { isLaoding, categories } = useSelector<RootState, RootState["categories"]>(state => state.categories);
    
    useEffect(() => {
      dispatch(fecthCategories())
    }, [])

    if (isLaoding) {
      return <>Loading...</>
    }

    return (
        <Box 
         className={classes.root} 
         display="flex" 
         flexDirection="column"
         justifyContent="center"
         alignItems="center">
          <List 
          component="ul" 
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              categories
            </ListSubheader>
          }    
          aria-label="list categories">
            {categories.map((category: CategoryModel, index: number) => (
               <CategoryCard 
               key={`id-${index}`} 
               data={category}></CategoryCard>
            ))}
           </List>
        </Box>
    )
}

export default CategoriesList;
