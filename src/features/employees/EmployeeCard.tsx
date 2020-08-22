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
import EmployeeEdit from './EmployeeEdit';

const EmployeeCard: React.FC<EmployeeModal> = (props: EmployeeModal) => {
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
            <IconButton edge="end" onClick={handleClickOpenEdit} className={classes.updateIcon} aria-label="edit ">
                <EditOutlined />
            </IconButton>
            <IconButton edge="end" onClick={handleClickOpen} className={classes.deleteIcon} aria-label="delete">
                <DeleteOutlined />
            </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        <EmployeeEdit open={openEdit} handleClose={handleCloseEdit} data={props}/>
        <AlertDialog 
        open={open}
        title="Eliminar Empleado"
        description={`Desea eliminar el empleado ${props.name}`}
        onClose={handleClose}
        onAction={handleDelete}/>
        </Paper> 
    )
}


export default EmployeeCard;