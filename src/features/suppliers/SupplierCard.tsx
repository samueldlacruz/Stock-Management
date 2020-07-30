import React from 'react';
import { 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  ListItemSecondaryAction,
  Paper,
  IconButton } from '@material-ui/core';

import {
 Store,
 EditOutlined,
 DeleteOutlined } from '@material-ui/icons/';

import { SupplierModel } from './Supplier.type';
import  useStyles from './supplierCard.styles';
import { useStores } from '../../store/StoresProvider';
import AlertDialog from '../../components/AlertDialog'; 

const SupplierCard: React.FC<SupplierModel> = (props: SupplierModel) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
       setOpen(false);
    };

    const { suppliersStore } = useStores();

    const handleDelete = () => {
        suppliersStore.removeSupplier(props.id);
        setOpen(false);
    }

    return (
        <Paper elevation={2} className={classes.paper}> 
        <ListItem className={classes.listItem}>
            <ListItemIcon>
            <Store />
            </ListItemIcon>
            <ListItemText 
            primary={props.name} 
            secondary={`tel: ${props.phone} email: ${props.email}`} />
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
        title="delete supplier"
        description={`supplier ${props.name} delete`}
        onClose={handleClose}
        onAction={handleDelete}/>
        </Paper> 
    )
}


export default SupplierCard;