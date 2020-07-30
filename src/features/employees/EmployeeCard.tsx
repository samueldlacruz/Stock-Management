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
import AlertDialog from '../../components/AlertDialog'; 

const EmployeeCard: React.FC<EmployeeModal> = (props: EmployeeModal) => {
    const classes = useStyles();
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
       setOpen(false);
    };

    const { employeesStore } = useStores();

    const handleDelete = () => {
        employeesStore.removeEmployee(props.id);
        setOpen(false);
    }

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
            <IconButton edge="end" onClick={handleClickOpen} className={classes.deleteIcon} aria-label="delete">
                <DeleteOutlined />
            </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        <AlertDialog 
        open={open}
        title="delete employee"
        description={`employee ${props.name} delete`}
        onClose={handleClose}
        onAction={handleDelete}/>
        </Paper> 
    )
}


export default EmployeeCard;