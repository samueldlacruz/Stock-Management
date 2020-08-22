import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LabelIcon from '@material-ui/icons/Label';
import StoreIcon from '@material-ui/icons/Store';
import UserIcon from '@material-ui/icons/People';
import OrdersIcon from '@material-ui/icons/Receipt';
import { Link } from 'react-router-dom';
import { ItemLinkModal } from './ItemLinkModel';

const linkStyles = {
  textDecoration: 'none',
  color: 'black'
};

const links: ItemLinkModal[] = [
  {path: '/', name:'Dashboard', icon: <DashboardIcon /> },
  {path: '/product', name:'Productos', icon: <ShoppingCartIcon /> },
  {path: '/category', name:'Categorias', icon: <LabelIcon/>},
  {path: '/supplier', name: 'Suplidores', icon: <StoreIcon /> },
  {path: '/employee', name: 'Empleados', icon: <UserIcon />},
  {path: '/orders', name: 'ordenes', icon: <OrdersIcon />}
];

export const mainListItems = (
  <div>
    {links.map((link: ItemLinkModal) => (
     <Link key={link.name} to={link.path} style={linkStyles}>
       <ListItem button>
       <Tooltip title={link.name.toLocaleUpperCase()}>
         <ListItemIcon>{link.icon}</ListItemIcon>
       </Tooltip>
      <ListItemText primary={link.name} />
    </ListItem> 
    </Link>     
    ))}
  </div>
);
