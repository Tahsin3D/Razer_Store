/* eslint-disable react/prop-types */
import { Box, Stack } from "@mui/material";

import ProductCarousal from "./ProductCarousal";
import { useSelector } from "react-redux";

const Hero = () => {
  const largeScreen = useSelector((state) => state.screenSizes.largeScreen);
  return (
    <Box
      sx={{
        paddingTop: largeScreen ? "80px" : "60px",
        width: "100%",
        height: largeScreen ? "100vh" : "calc(100vh - 50px)",
        borderBottom: '1px solid gray',
        background:
          "repeating-linear-gradient(-45deg, #111417 0%,#111417 0.25%, #181a1b 0.25%, #181a1b 0.5%)",
      }}
    >
      <Stack direction="row" sx={{ height: "100%" }}>
        <ProductCarousal />
      </Stack>
    </Box>
  );
};

export default Hero;
