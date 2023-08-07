import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Box,
  Grid,
  CircularProgress,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";

const Products = () => {
  const dispatch = useDispatch();  // to send Action
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <Container>
      {loading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <CircularProgress />
          <Typography variant="body2" color="text.secondary">
            loading...
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={4} sx={{ mt: 4, mb: 4 }}>
          {products.map((product) => (
            <Grid item xs={6} md={4} lg={3} key={product.id}>
              <Card sx={{ maxWidth: 300, maxHeight: 400 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  width="200"
                  image={product.image}
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
                    size="small"
                    variant="contained"
                    onClick={() => handleAdd(product)}
                  >
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Products;
