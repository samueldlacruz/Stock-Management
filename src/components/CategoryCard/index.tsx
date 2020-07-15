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
 UpdateOutlined,
 DeleteOutlined } from '@material-ui/icons/';

import { CategoryModel } from '../../interfaces/CategoryModel';
import { useDispatch } from 'react-redux';
import  useStyles from './styles';
import { deleteCategory } from '../../stores/CategoriesSlice';

interface JSXData<T> extends JSX.IntrinsicAttributes {
  data: T;
}

const CategoryCard = (props: JSXData<CategoryModel>): JSX.Element => {
    const classes = useStyles();

    const dispatch = useDispatch();

    return (
        <Paper elevation={2} className={classes.paper}> 
        <ListItem className={classes.listItem}>
            <ListItemIcon>
            <Label />
            </ListItemIcon>
            <ListItemText primary={props.data.name} secondary={props.data.description} />
            <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit ">
                <EditOutlined />
            </IconButton>
            <IconButton edge="end" className={classes.updateIcon} aria-label="update">
                <UpdateOutlined />
            </IconButton>
            <IconButton edge="end" onClick={() => dispatch(deleteCategory(props.data.name))} className={classes.deleteIcon} aria-label="delete">
                <DeleteOutlined />
            </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        </Paper> 
    )
}


export default CategoryCard;