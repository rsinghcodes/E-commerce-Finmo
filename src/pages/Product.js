import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Chip, Grid, Paper, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProductById,
  productSelector,
} from '../redux/reducers/productSlice';
import { addItem } from '../redux/reducers/cartSlice';
// components
import Header from '../components/Header';

const Product = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { product, isLoading } = useSelector(productSelector);

  useEffect(() => {
    dispatch(fetchProductById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Box display="flex" justifyContent="center" alignItems="center">
        {isLoading ? (
          <Typography variant="subtitle1" component="p" sx={{ mb: 1, mt: 2 }}>
            Please wait, Data Loading...
          </Typography>
        ) : (
          <Paper variant="outlined" sx={{ p: 2.5, mt: 2 }}>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12} md={5}>
                <img
                  src={product.image}
                  alt="Hero main"
                  width={400}
                  height={450}
                />
              </Grid>
              <Grid item xs={12} md={7}>
                <Chip
                  label={product.category}
                  variant="outlined"
                  sx={{ mb: 1 }}
                />
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ mb: 1 }}
                >
                  {product.title}
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="p"
                  fontWeight={600}
                >
                  Product Description
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="p"
                  maxWidth={650}
                >
                  {product.description}
                </Typography>
                <Typography gutterBottom variant="body2" sx={{ mt: '1rem' }}>
                  Price: ${product.price}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  sx={{ textTransform: 'none', mt: 1 }}
                  startIcon={<AddIcon />}
                  onClick={() => dispatch(addItem(product))}
                >
                  Add to cart
                </Button>
              </Grid>
            </Grid>
          </Paper>
        )}
      </Box>
    </>
  );
};

export default Product;
