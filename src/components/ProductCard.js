import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

const ProductCard = ({ image, title, price, ratingValue }) => {
  return (
    <>
      <Card
        sx={{
          maxWidth: 300,
          m: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <CardMedia component="img" alt="green iguana" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography component="legend" variant="body2">
            Ratings
          </Typography>
          <Rating name="simple-controlled" value={ratingValue} />
          <Typography variant="body2" sx={{ mt: '1rem' }}>
            Price: ${price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            disableElevation
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;
