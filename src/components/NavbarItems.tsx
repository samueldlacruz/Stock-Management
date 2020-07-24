import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LabelIcon from '@material-ui/icons/Label';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';
import { ItemLinkModal } from './ItemLinkModel';

const linkStyles = {
  textDecoration: 'none',
  color: 'black'
};

const links: ItemLinkModal[] = [
  {path: '/', name:'Dashboard', icon: <DashboardIcon /> },
  {path: '/product', name:'Product', icon: <ShoppingCartIcon /> },
  {path: '/category', name:'Category', icon: <LabelIcon/>},
  {path: '/supplier', name: 'Supplier', icon: <PeopleIcon /> },
  {path: '/registries', name: 'Registries', icon: <AssignmentIcon />}
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
