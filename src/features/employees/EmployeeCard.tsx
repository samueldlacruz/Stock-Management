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
 DeleteOutlined } from '@material-ui/icons/';

import { EmployeeModal } from './Employee.type'
import  useStyles from './employeeCard.styles';
import { useStores } from '../../store/StoresProvider'; 


const EmployeeCard: React.FC<EmployeeModal> = (props: EmployeeModal) => {
    const classes = useStyles();
    
    const { employeesStore } = useStores();

    return (
        <Paper elevation={2} className={classes.paper}> 
        <ListItem className={classes.listItem}>
            <ListItemIcon>
            <People />
            </ListItemIcon>
            <ListItemText 
            primary={`${props.name} ${props.lastname}`} 
            secondary={`tel: ${props.phone} email: ${props.email}`} />
            <ListItemSecondaryAction>
            <IconButton edge="end" className={classes.updateIcon} aria-label="edit ">
                <EditOutlined />
            </IconButton>
            <IconButton edge="end" onClick={() => employeesStore.removeEmployee(props.id)} className={classes.deleteIcon} aria-label="delete">
                <DeleteOutlined />
            </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        </Paper> 
    )
}


export default EmployeeCard;