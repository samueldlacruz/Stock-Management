import React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Box from '@material-ui/core/Box';
import useStyles from './styles';

interface ListProps {
  title: string;
}

const ListContainer: React.FC<ListProps> = (props) => {
  const classes = useStyles();

    return (
        <Box 
         className={classes.root} 
         display="flex" 
         flexDirection="column"
         justifyContent="center"
         alignItems="center">
          <List 
          component="ul" 
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              {props.title}
            </ListSubheader>
          }    
          aria-label={`list ${props.title}`}>
            {props.children}
           </List>
        </Box>
    )
}

export default ListContainer;
