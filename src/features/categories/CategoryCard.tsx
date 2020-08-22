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
import CategoryEdit from './CategoryEdit';

const CategoryCard: React.FC<CategoryModel> = (props: CategoryModel) => {
    const [open, setOpen] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);

    const classes = useStyles();

    const { categoriesStore } = useStores();
    const { removeCategory } = categoriesStore;

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
       setOpen(false);
    };

    const handleClickOpenEdit = () => {
        setOpenEdit(true);
    };
    
    const handleCloseEdit = () => {
       setOpenEdit(false);
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
               <IconButton 
                edge="end" 
                onClick={handleClickOpenEdit}
                className={classes.updateIcon} 
                aria-label="edit ">
                    <EditOutlined />
                </IconButton>
               <IconButton 
                 edge="end" 
                 onClick={handleClickOpen} 
                 className={classes.deleteIcon} 
                 aria-label="delete">
                 <DeleteOutlined />
               </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        <CategoryEdit open={openEdit} handleClose={handleCloseEdit} data={props}/>
        <AlertDialog 
        open={open}
        title="Eliminar categoria"
        description={`desea eliminar la categoria ${props.name}`}
        onClose={handleClose}
        onAction={handleDelete}/>
        </Paper> 
    )
}


export default CategoryCard;