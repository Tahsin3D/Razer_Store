import { Box, Button } from "@mui/material";
import { products } from "../utils";
import { useSelector } from "react-redux";
import HomeProductDisplay from "./HomeProductDisplay";
import { useState } from "react";
import ProductCard from "./ProductCard";

const HomeProductsSection = () => {
  const largeScreen = useSelector((state) => state.screenSizes.largeScreen);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const extraProductsToShow = products.slice(-4);

  return (
    <Box
      sx={{
        backgroundColor: "rgb(22,22,22)",
        padding: largeScreen ? "70px" : "20px",
        alignContent: "center",
        justifyItems: "center",
      }}
    >
      <Box sx={{maxWidth: '1400px'}}>
        <HomeProductDisplay product={products[currentProductIndex]} />
        <Box
          sx={{
            display: "flex",
            flexDirection: largeScreen? 'row': "column",
            justifyContent: "space-between",
          }}
        >
          {extraProductsToShow.map((product) => (
            <Button
              sx={{ padding: '10px', width: largeScreen?"22%": '100%' }}
              key={product.id}
              onClick={() => {
                setCurrentProductIndex(product.id - 1);
              }}
            >
              <ProductCard product={product} />
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HomeProductsSection;
