import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Container,
  Typography,
  Stack,
} from "@mui/material";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <Container
      maxWidth="xl"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "40px",
        marginTop: "20px",
      }}
    >
      <Typography variant="h6" sx={{ color: "red" }}>
        REDUX STORE
      </Typography>
      <Stack direction="row" gap={4}>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Typography sx={{ color: "red" }} variant="title">
          Cart items: {items.length}{" "}
        </Typography>
      </Stack>
    </Container>
  );
};

export default Navbar;
