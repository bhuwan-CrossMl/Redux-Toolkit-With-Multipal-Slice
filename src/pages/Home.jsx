import React from "react";
import Products from "../components/Products";
import { Container, Typography} from "@mui/material";

const Home = () => {
  return (
    <Container component="main" maxWidth="xl">
      <Typography variant="h4">Welcome to the Redux toolkit store</Typography>
      <Container maxWidth="xl">
        <Typography variant="h6">Products - </Typography>

        <Products />
      </Container>
    </Container>
  );
};

export default Home;
