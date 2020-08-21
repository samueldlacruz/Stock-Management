import React, { useEffect, useState } from 'react';
import { 
  ListItem, 
  ListItemAvatar,
  Avatar, 
  ListItemText, 
  ListItemSecondaryAction,
  Paper,
  Badge,
  IconButton,
 Typography} from '@material-ui/core';

import {
 EditOutlined,
 DeleteOutlined } from '@material-ui/icons/';

import { ProductModel } from './Product.types';
import { useStores } from '../../store/StoresProvider';
import  useStyles from './productCard.styles';
import AlertDialog from '../../components/AlertDialog';
import { getCategoryNameById } from '../../api/categories';

const ProductCard: React.FC<ProductModel> = (props: ProductModel) => {
    const classes = useStyles();
  
    const [category, setCategory] = useState('');
    const [openDialogDelete, setOpenDialogDelete] = React.useState(false);

    const { productsStore: { removeProduct } } = useStores();

    const getCategory = async () => {
        const name = await getCategoryNameById(props.categoryId);
        await setCategory(name);
    }

    useEffect(() => {
       getCategory();
    }, [])

   const handleCloseDelete = () => setOpenDialogDelete(false);

   const handleDelete = () => {
    removeProduct(props.sku, props.photoUri);
    
    setOpenDialogDelete(false);
   } 
   
   const handleClickOpenDelete = () => setOpenDialogDelete(true);

    return (
        <Paper elevation={2} className={classes.paper}> 
        <ListItem className={classes.listItem}>
        <Badge badgeContent={props.quantity} color="primary" />
        <ListItemAvatar>
          <Avatar alt={`photo ${props.name}`} src={props.photoUri} />
        </ListItemAvatar>
            <ListItemText 
            primary={
                <span>
                  <strong>{props.sku}</strong>-{props.name}
                </span>
                } 
            secondary={
                <React.Fragment>
                <Typography
                  component="span"
                  className={classes.block}
                  variant="subtitle1"
                  color="textPrimary"
                >
                 {category}
                </Typography>
                <Typography
                  component="span"
                  variant="body1"
                  className={classes.block}
                  color="textPrimary"
                >
                 {props.description}
                </Typography>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.block}
                  color="textPrimary"
                >
                <strong>units:</strong> {props.units}
                </Typography>

                <Typography
                  component="span"
                  variant="body2"
                  className={classes.block}
                  color="textPrimary"
                >
                <strong>price: </strong> {props.sellingPrice}
                <strong> quantity:</strong> {props.quantity}
                </Typography>
              </React.Fragment>
            }
            />
            <ListItemSecondaryAction>
            <IconButton edge="end" className={classes.updateIcon} aria-label="edit ">
                <EditOutlined />
            </IconButton>
            <IconButton edge="end" onClick={handleClickOpenDelete} className={classes.deleteIcon} aria-label="delete">
                <DeleteOutlined />
            </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        <AlertDialog 
         open={openDialogDelete}
         title="delete product"
         description={`product ${props.name} delete`}
         onClose={handleCloseDelete}
         onAction={handleDelete}
        />
        </Paper> 
    )
}

export default ProductCard;