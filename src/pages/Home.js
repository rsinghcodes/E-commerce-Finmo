import React, { useEffect } from 'react';
import { Box, Button } from '@mui/material';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  fetchProductsByCategory,
  productSelector,
} from '../redux/reducers/productSlice';
// components
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(productSelector);

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Box display="flex" justifyContent="center" alignItems="center" p={3}>
        <Button
          variant="outlined"
          sx={{ mx: '1rem' }}
          onClick={() => dispatch(fetchProducts())}
        >
          All
        </Button>
        <Button
          variant="outlined"
          sx={{ mx: '1rem' }}
          onClick={() => dispatch(fetchProductsByCategory('electronics'))}
        >
          Electronics
        </Button>
        <Button
          variant="outlined"
          sx={{ mx: '1rem' }}
          onClick={() => dispatch(fetchProductsByCategory('jewelery'))}
        >
          Jewelery
        </Button>
        <Button
          variant="outlined"
          sx={{ mx: '1rem' }}
          onClick={() => dispatch(fetchProductsByCategory("men's clothing"))}
        >
          Men's clothing
        </Button>
        <Button
          variant="outlined"
          sx={{ mx: '1rem' }}
          onClick={() => dispatch(fetchProductsByCategory("women's clothing"))}
        >
          Women's clothing
        </Button>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </>
  );
};

export default Home;
