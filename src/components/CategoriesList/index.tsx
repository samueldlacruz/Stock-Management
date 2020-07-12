import React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Box from '@material-ui/core/Box';
import CategoryModel from '../../interfaces/CategoryModel';
import CategoryCard from '../CategoryCard';
import useStyles from './styles';

const categories: CategoryModel[] = [
  {name: 'candies', description: 'description candies'},
  {name: 'snack', description: 'description snack'},
  {name: 'soda', description: 'description soda'},
  {name: 'cleaning product', description: 'description cleaning product'}
];

const CategoriesList = () => {
    const classes = useStyles();

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
