import React from 'react';
import { Link } from 'react-router-dom';
// mui
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

const ProductCard = ({ product }) => {
  return (
    <>
      <Card
        sx={{
          width: 300,
          height: 600,
          m: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <CardMedia component="img" height="300" image={product.image} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.title}
          </Typography>
          <Typography component="legend" variant="body2">
            Ratings
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Rating value={product.rating.rate} readOnly precision={0.5} />
            <Box sx={{ ml: 1 }}>{product.rating.count}</Box>
          </Box>
          <Typography variant="body2" sx={{ mt: '1rem' }}>
            Price: ${product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            disableElevation
            sx={{ textTransform: 'none' }}
            component={Link}
            to={`/product/${product.id}`}
          >
            View Product
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;
