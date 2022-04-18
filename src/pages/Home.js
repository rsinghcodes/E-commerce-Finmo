import React, { useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, productSelector } from '../redux/reducers/productSlice';
// components
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { Box } from '@mui/material';

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
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            ratingValue={product.rating.rate}
          />
        ))}
      </Box>
    </>
  );
};

export default Home;
