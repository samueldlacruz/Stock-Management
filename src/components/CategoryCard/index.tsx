import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Label from '@material-ui/icons/Label';
import EditOutlined from '@material-ui/icons/EditOutlined';
import UpdateOutlined from '@material-ui/icons/UpdateOutlined';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import Paper from '@material-ui/core/Paper';
import CategoryModel from '../../interfaces/CategoryModel';
import useStyles from './styles';

interface JSXData<T> extends JSX.IntrinsicAttributes {
  data: T;
}

const CategoryCard = (props: JSXData<CategoryModel>): JSX.Element => {
    const classes = useStyles();

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
            <IconButton edge="end" className={classes.deleteIcon} aria-label="delete">
                <DeleteOutlined />
            </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        </Paper> 
    )
}

export default CategoryCard;