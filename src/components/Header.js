import React from 'react';
import { Link } from 'react-router-dom';
// material
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, logout } from '../redux/reducers/authSlice';
import { cartSelector } from '../redux/reducers/cartSlice';

export default function Header() {
  const dispatch = useDispatch();
  const { user } = useSelector(authSelector);
  const { cart } = useSelector(cartSelector);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Commerce
          </Typography>
          <Button
            color="inherit"
            variant="outlined"
            sx={{ mr: '1rem' }}
            onClick={() => {
              dispatch(logout());
            }}
          >
            Logout
          </Button>
          <IconButton
            aria-label="delete"
            size="small"
            sx={{ mr: '1rem' }}
            component={Link}
            to="/cart"
          >
            <Badge
              color="secondary"
              badgeContent={cart.reduce(
                (accumulatedQuantity, cartItem) =>
                  accumulatedQuantity + cartItem.qty,
                0
              )}
            >
              <ShoppingCartIcon sx={{ color: '#fff' }} />
            </Badge>
          </IconButton>
          <Button color="inherit" variant="outlined">
            {user.firstname + ' ' + user.lastname}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
