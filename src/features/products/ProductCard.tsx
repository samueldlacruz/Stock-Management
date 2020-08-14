import React, { useEffect, useState } from 'react';
import { 
  ListItem, 
  ListItemAvatar,
  Avatar, 
  ListItemText, 
  ListItemSecondaryAction,
  Paper,
  IconButton,
 Typography} from '@material-ui/core';

import {
 EditOutlined,
 DeleteOutlined } from '@material-ui/icons/';

import { ProductModel } from './Product.type';
import  useStyles from './productCard.styles';
import { getCategoryNameById } from '../../api/categories';

const ProductCard: React.FC<ProductModel> = (props: ProductModel) => {
    const classes = useStyles();
  
    const [category, setCategory] = useState('');

    const getCategory = async () => {
        const name = await getCategoryNameById(props.categoryId);
        await setCategory(name);
    }
    useEffect(() => {
       getCategory();
    }, [])


    return (
        <Paper elevation={2} className={classes.paper}> 
        <ListItem className={classes.listItem}>
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
                <strong> alert quantity:</strong> {props.alertQuantity} %
                </Typography>

                <Typography
                  component="span"
                  variant="body2"
                  className={classes.block}
                  color="textPrimary"
                >
                <strong>price: </strong> {props.sellingPrice}
                <strong> margin profitability:</strong> {props.marginProfitability}
                </Typography>
              </React.Fragment>
            }
            />
            <ListItemSecondaryAction>
            <IconButton edge="end" className={classes.updateIcon} aria-label="edit ">
                <EditOutlined />
            </IconButton>
            <IconButton edge="end" onClick={() => console.log(props.sku)} className={classes.deleteIcon} aria-label="delete">
                <DeleteOutlined />
            </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        </Paper> 
    )
}


export default ProductCard;