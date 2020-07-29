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


const SupplierCard: React.FC<SupplierModel> = (props: SupplierModel) => {
    const classes = useStyles();

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
            <IconButton edge="end" className={classes.deleteIcon} aria-label="delete">
                <DeleteOutlined />
            </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        </Paper> 
    )
}


export default SupplierCard;