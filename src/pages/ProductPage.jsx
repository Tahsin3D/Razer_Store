import { Box, Button, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { Btn, products } from "../utils";
import { useSelector } from "react-redux";
import ExtraProducts from "../components/ExtraProducts";

const ProductPage = () => {
  const largeScreen = useSelector((state) => state.screenSizes.largeScreen);
  const currentProductName = useParams().product;
  const currentProduct = products.find(
    (product) => product.name === currentProductName
  );
  const currentProductIndex = currentProduct.id - 1;

  const extraProducts = Array.from({ length: 3 }, (_, i) => {
    const index = (currentProductIndex + 1 + i) % products.length;
    return products[index];
  });

  return (
    <Box
      sx={{
        width: "100%",
        // height: "100vh",
        padding: largeScreen ? "70px 70px 10px" : "70px 10px",
        maxHeight: largeScreen?'1080px': '',
        background:
          "repeating-linear-gradient(-45deg, #111417 0%,#111417 0.25%, #181a1b 0.25%, #181a1b 0.5%)",
      }}
    >
      <Box
        sx={{
          maxWidth: "1400px",
          width: "100%",
          margin: "0 auto",
          height: largeScreen? "calc(100% - 80px)": '100%',
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: largeScreen? 'row': 'column',
            alignItems: "center",
            height: "60%",
          }}
        >
          <Box
            sx={{
              width: largeScreen?"50%": '100%',
            }}
          >
            <Typography sx={{
              fontSize: largeScreen?"4rem": '1.8rem',
            }} variant="h1">
              {currentProduct.name}
            </Typography>
            <Typography sx={{ 
              paddingTop: '10px',
              color: "gray"
               }} variant="body2" fontSize="1rem">
              {currentProduct.description}
            </Typography>
            <Box sx={{
              paddingTop: '30px'
            }}>
              <Btn to={`/products/${currentProduct.name}`} text={"BUY NOW"} />
            </Box>
          </Box>
          <Box
            sx={{
              width: largeScreen? "50%": '80%',
              display: "flex",
              justifyContent: largeScreen?"right": 'center',
            }}
          >
            <img
              style={{
                // paddingTop: largeScreen?"30%": '0px',
                filter:
                "drop-shadow(0 0 5px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 10px rgba(255, 255, 255, 0.6))",
              }}
              width="90%"
              src={currentProduct.image}
              alt="image"
            />
          </Box>
        </Box>
        <Box sx={{}}>
          <ExtraProducts products={extraProducts} />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;
