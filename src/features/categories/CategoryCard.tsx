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
import  useStyles from './categoryCard.styles';
import { useStores } from '../../store/StoresProvider';
import AlertDialog from '../../components/AlertDialog'; 

const CategoryCard: React.FC<CategoryModel> = (props: CategoryModel) => {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const { categoriesStore } = useStores();
    const { removeCategory } = categoriesStore;

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
       setOpen(false);
    };

    const handleDelete = () => {
       removeCategory(props.id);
       setOpen(false);
    }

    return (
        <Paper elevation={2} className={classes.paper}> 
        <ListItem className={classes.listItem}>
            <ListItemIcon>
            <Label />
            </ListItemIcon>
            <ListItemText primary={props.name} secondary={props.description} />
            <ListItemSecondaryAction>
            <IconButton edge="end" className={classes.updateIcon} aria-label="edit ">
                <EditOutlined />
            </IconButton>
            <IconButton edge="end" onClick={handleClickOpen} className={classes.deleteIcon} aria-label="delete">
                <DeleteOutlined />
            </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        <AlertDialog 
        open={open}
        title="delete category"
        description={`category ${props.name} delete`}
        onClose={handleClose}
        onAction={handleDelete}/>
        </Paper> 
    )
}


export default CategoryCard;