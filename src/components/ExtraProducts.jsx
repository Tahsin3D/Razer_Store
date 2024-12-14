/* eslint-disable react/prop-types */
import { Box, Button } from "@mui/material"
import ProductCard from "./ProductCard"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";

const ExtraProducts = ({products}) => {
    const largeScreen = useSelector((state) => state.screenSizes.largeScreen);
  return (
    <Box
        sx={{
          display: largeScreen ? "flex" : "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          flexDirection: largeScreen ? "row" : "column",
          justifyContent: "space-between",
          height: '100%',
          width: largeScreen?'50%': '100%',
          paddingTop: largeScreen? '0': '30px'
        }}
      >
        {products.map((product) => (
          <Button
            component={Link}
            to={`/products/${product.name}`}
            sx={{
            //   width: largeScreen ? "50%" : "100%",
            //   height: '70%'
            }}
            key={product.id}
          >
            <ProductCard product={product} key={product.id} />
          </Button>
        ))}
      </Box>
)
}

export default ExtraProducts
