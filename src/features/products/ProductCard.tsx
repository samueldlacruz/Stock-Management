import React, { useEffect, useState } from 'react';
import { 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  ListItemSecondaryAction,
  Paper,
  IconButton } from '@material-ui/core';

import {
 Label,
 EditOutlined,
 DeleteOutlined } from '@material-ui/icons/';

import { ProductModel } from './Product.type';
import  useStyles from './productCard.styles';
import { getCategoryNameById } from '../../api/categories';

const ProductCard: React.FC<ProductModel> = (props: ProductModel) => {
    const classes = useStyles();
  
    const [category, setCategory] = useState('');

    const getCategory = async () => {
        const name = await getCategoryNameById(props.categoryId);
        await setCategory(name);
    }
    useEffect(() => {
       getCategory();
    }, [])


    return (
        <Paper elevation={2} className={classes.paper}> 
        <ListItem className={classes.listItem}>
            <ListItemIcon>
            <Label />
            </ListItemIcon>
            <ListItemText primary={props.sku} secondary={category}/>
            <ListItemText primary={props.name} secondary={props.description} />
            <ListItemSecondaryAction>
            <IconButton edge="end" className={classes.updateIcon} aria-label="edit ">
                <EditOutlined />
            </IconButton>
            <IconButton edge="end" onClick={() => console.log(props.sku)} className={classes.deleteIcon} aria-label="delete">
                <DeleteOutlined />
            </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        </Paper> 
    )
}


export default ProductCard;