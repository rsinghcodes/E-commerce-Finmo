import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Paper, Typography } from '@mui/material';
// Redux
import { useSelector } from 'react-redux';
import { authSelector } from '../redux/reducers/authSlice';
// components
import Header from '../components/Header';

const Checkout = () => {
  const { user } = useSelector(authSelector);
  return (
    <>
      <Header />
      <Box p={3}>
        <Paper variant="outlined" sx={{ p: 2.5, mt: 2, textAlign: 'center' }}>
          <Typography variant="body1" component="p">
            Hi, {user.firstname} {user.lastname}, Your order is placed. We will
            be back to you soon.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            sx={{ textTransform: 'none', mt: 2 }}
            component={Link}
            to="/"
          >
            Return Home
          </Button>
        </Paper>
      </Box>
    </>
  );
};

export default Checkout;
