// import { getNodeText } from '@testing-library/react';
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import {
  Container,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";


const Cart = () => {
  const dispatch = useDispatch();  // To Send Action

  const products = useSelector((state) => state.cart);  // to get Action/Function

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };


  return (
    <Container component="main" maxWidth="xl">
      <Typography variant="h6"> Cart - </Typography>

      {products?.map((product) => (
        <Card
          sx={{
            maxWidth: "100%",
            maxHeight: 100,
            display: "flex",
            justifyContent: "space-between",
            padding: 3,
            mt: 4,
            mb:4
          }}
          key={product.id}
        >
          <CardMedia
            component="img"
            image={product.image}
            sx={{ width: "80px" }}
          />
          <CardContent>
            <Typography gutterBottom variant="title" component="div">
              {product.title.length > 50
                ? `${product.title.substring(0, 50)}...`
                : product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              onClick={() => handleRemove(product.id)}
            >
              Remove
            </Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
};

export default Cart;
