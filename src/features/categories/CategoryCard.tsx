import React from 'react';
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

import { CategoryModel } from './CategoryModel';
import { useDispatch } from 'react-redux';
import  useStyles from './categoryCard.styles';
import { removeCategory } from './CategoriesSlice';

const CategoryCard: React.FC<CategoryModel> = (props: CategoryModel) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    return (
        <Paper elevation={2} className={classes.paper}> 
        <ListItem className={classes.listItem}>
            <ListItemIcon>
            <Label />
            </ListItemIcon>
            <ListItemText primary={props.name} secondary={props.description} />
            <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit ">
                <EditOutlined />
            </IconButton>
            <IconButton edge="end" onClick={() => dispatch(removeCategory(props.id))} className={classes.deleteIcon} aria-label="delete">
                <DeleteOutlined />
            </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        </Paper> 
    )
}


export default CategoryCard;