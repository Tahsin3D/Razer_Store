/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        border: "1px solid gray",
        textAlign: "center",
      }}
    >
      <img width="70%" src={product.image} alt={product.name} />
      <Typography fontWeight="800" fontSize={14} variant="h5">
        {product.name.toUpperCase()}
      </Typography>
      <Typography
        sx={{ padding: "2% 0px 16px", color: "#27f026" }}
        variant="body1"
      >
        Rs. {Math.floor(product.price * 277.83).toLocaleString()}
      </Typography>
    </Box>
  );
};

export default ProductCard;
