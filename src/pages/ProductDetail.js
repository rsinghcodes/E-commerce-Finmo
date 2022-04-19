import React, { useEffect } from 'react';
import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProductById,
  productSelector,
} from '../redux/reducers/productSlice';
import Header from '../components/Header';

const ProductDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { product } = useSelector(productSelector);

  useEffect(() => {
    dispatch(fetchProductById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={5} padding={2}>
            <img
              src={product.image}
              alt="Hero main"
              width="400rem"
              height="450rem"
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Chip label={product.category} variant="outlined" sx={{ mb: 1 }} />
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
            >
              Add to cart
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductDetail;
