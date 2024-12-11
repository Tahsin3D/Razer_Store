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
        height: "100vh",
        padding: largeScreen ? "70px" : "20px",
      }}
    >
      <HomeProductDisplay product={products[currentProductIndex]} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {extraProductsToShow.map((product) => (
          <Button sx={{padding:0, width: '22%'}} key={product.id}
            onClick={()=>{setCurrentProductIndex(product.id-1)}}
          >
            <ProductCard product={product} />
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default HomeProductsSection;
