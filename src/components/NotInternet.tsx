import React from 'react'
import { Box, Typography } from '@material-ui/core';
import NotInternetIcon from '@material-ui/icons/NetworkCheckOutlined';

const NotInternet = () => {
    return (
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center">
            <Typography variant="h5" component="span">
             Not Internet Connection
             <NotInternetIcon fontSize="large" style={{marginLeft: '5px'}}/>
            </Typography>             
        </Box>

    )
}

export default NotInternet
