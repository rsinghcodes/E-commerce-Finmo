import { Link } from 'react-router-dom';
import { Box, Button, Paper, Typography } from '@mui/material';
// components
import CartItem from '../components/CartItem';
import Header from '../components/Header';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { cartSelector, clearCart } from '../redux/reducers/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(cartSelector);

  return (
    <>
      <Header />
      <Box p={3}>
        <Typography variant="h5" fontWeight="600" component="h5">
          Cart Items
        </Typography>
        {cart.length !== 0 ? (
          cart.map((product) => (
            <>
              <CartItem key={product.id} product={product} />
            </>
          ))
        ) : (
          <Paper variant="outlined" sx={{ p: 2.5, mt: 2, textAlign: 'center' }}>
            <Typography variant="body1" component="p">
              Your Cart is empty.
            </Typography>
          </Paper>
        )}
        {cart.length !== 0 && (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-end"
            mt={2}
          >
            <Typography variant="body1" component="p">
              Total Order Price: $
              {cart
                .reduce(
                  (accumulatedQuantity, cartItem) =>
                    accumulatedQuantity + cartItem.qty * cartItem.price,
                  0
                )
                .toFixed(2)}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              sx={{ textTransform: 'none', mt: 2 }}
              component={Link}
              to="/checkout"
              onClick={() => dispatch(clearCart())}
            >
              Place Order
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Cart;
