/* eslint-disable react/prop-types */
import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { products, Btn, ArrowDown, FacebookIcon, XIcon, InstagramIcon } from "../utils";

const ProductCarousal = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [timerCount, setTimerCount] = useState(0);

  const handleClick = (index) => {
    if (index !== currentProductIndex) {
      setCurrentProductIndex(index);
      setTimerCount((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentProductIndex(
        (previousIndex) => (previousIndex + 1) % products.length
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, [timerCount]);

  const currentProduct = products[currentProductIndex];
  return (
    <Box sx={{ padding: "70px", width: "100%" }}>
      <Stack
        direction="row"
        sx={{
          height: "400px",
          justifyContent: "space-between",
          // backgroundColor: "red",
          alignItems: "center",
        }}
      >
        <Box sx={{}}>
          <Typography variant="h2">{currentProduct[0]}</Typography>
          <Typography>{currentProduct[1]}</Typography>
          <Btn text={"VIEW MORE"} />
        </Box>
        <Box sx={{ width: "400px" }}>
          <img width="100%" src={currentProduct[2]} alt={currentProduct[0]} />
        </Box>
      </Stack>
      <Stack direction="row" sx={{justifyContent: 'space-between'}}>
        <Box>
        {Array.from({ length: products.length }).map((element, index) => (
          <Button
            onClick={() => {
              handleClick(index);
            }}
            key={index}
            sx={{
              margin: "5px",
              backgroundColor:
                index === currentProductIndex ? "#26f027" : "white",
              ":hover": {
                backgroundColor: index !== currentProductIndex? "#d0ffd2": '#26f027',
              },
              transition: "background-color 0.3s ease",
              width: "10px",
              minWidth: "10px",
              height: "15px", 
              borderRadius: "50%",
            }}
          />
        ))}
        </Box>
        <ArrowDown/>
        <Stack direction='row'>
          <FacebookIcon/>
          <XIcon/>
          <InstagramIcon/>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProductCarousal;
