import React from 'react';
import {
  Typography,
  Paper,
  ButtonGroup,
  Button,
  Grid,
  Chip,
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
// Redux
import { useDispatch } from 'react-redux';
import { addItem, deleteItem, removeItem } from '../redux/reducers/cartSlice';

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Paper variant="outlined" sx={{ p: '1rem', my: 1, maxWidth: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs={12} md={8} container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h6">
                {product.title}
              </Typography>
              <Typography variant="subtitle1" component="p">
                Price: ${product.price}
              </Typography>
              <Chip
                label={product.category}
                variant="outlined"
                sx={{ mt: 1.5 }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} container direction="column" spacing={2}>
            <Grid
              item
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <Typography variant="subtitle1" component="p">
                Total Quantity Price: ${product.qty * product.price}
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <ButtonGroup color="primary">
                <Button onClick={() => dispatch(deleteItem(product))}>
                  <RemoveIcon />
                </Button>
                <Button>{product.qty}</Button>
                <Button onClick={() => dispatch(addItem(product))}>
                  <AddIcon />
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid
              item
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                disableElevation
                onClick={() => dispatch(removeItem(product))}
              >
                Remove
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CartItem;
