import React, {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {NavLink } from 'react-router-dom';
import { AuthContext } from "./AuthProvider";

export default function Menu() {
  const {logOutUser, user}= useContext(AuthContext);
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={NavLink} to={'/'} sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Typography variant="h6" component={NavLink} to={'/users'} sx={{ flexGrow: 1 }}>
            Users
          </Typography>
          {
            !user ?
            <>
              <Button component={NavLink} to={'/login'} color="inherit">Login</Button>
              <Button component={NavLink} to={'/registration'} color="inherit">Registration</Button>
            </>
            :
            <>
            <Button component={NavLink} to={'/profile'} color="inherit">{user?.firstName || 'User'} {user?.lastName || 'User'}</Button>
            <Button onClick={logOutUser} color="inherit">LogOut</Button>
            </>
        
          }
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
