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
import SupplierEdit from './SupplierEdit';

const SupplierCard: React.FC<SupplierModel> = (props: SupplierModel) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    
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
            <IconButton edge="end"  onClick={handleClickOpenEdit} className={classes.updateIcon} aria-label="edit ">
                <EditOutlined />
            </IconButton>
            <IconButton edge="end" onClick={handleClickOpen} className={classes.deleteIcon} aria-label="delete">
                <DeleteOutlined />
            </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        <SupplierEdit open={openEdit} handleClose={handleCloseEdit} data={props}/>
        <AlertDialog 
        open={open}
        title="Eliminar Suplidor"
        description={`Eliminar Suplidor ${props.name}`}
        onClose={handleClose}
        onAction={handleDelete}/>
        </Paper> 
    )
}


export default SupplierCard;