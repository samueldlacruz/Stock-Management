import React from 'react';
import { 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  ListItemSecondaryAction,
  Paper,
  IconButton } from '@material-ui/core';

import {
 People,
 EditOutlined,
 UpdateOutlined,
 DeleteOutlined } from '@material-ui/icons/';

import { SupplierModel } from '../../interfaces/SupplierModel';
import  useStyles from './styles';


const SupplierCard: React.FC<SupplierModel> = (props: SupplierModel) => {
    const classes = useStyles();

    return (
        <Paper elevation={2} className={classes.paper}> 
        <ListItem className={classes.listItem}>
            <ListItemIcon>
            <People />
            </ListItemIcon>
            <ListItemText 
            primary={props.name} 
            secondary={`tel: ${props.phone} email: ${props.email}`} />
            <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit ">
                <EditOutlined />
            </IconButton>
            <IconButton edge="end" className={classes.updateIcon} aria-label="update">
                <UpdateOutlined />
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