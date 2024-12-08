/* eslint-disable react/prop-types */
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { products, Btn, ArrowDown, FacebookIcon, XIcon, InstagramIcon } from "../utils";
import IconBtn from "./IconBtn";

const ProductCarousal = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [timerCount, setTimerCount] = useState(0);

  const handleClick = (index) => {
    if (index !== currentProductIndex) {
      setCurrentProductIndex(index);
      setTimerCount((prev) => prev + 1);
    }
  };

  const handleArrowDown = () => {
    console.log('arrow-down')
  }
  
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
    <Box sx={{padding: "70px", width: "100%" }}>
      <Stack
        direction="row"
        sx={{
          height: "400px",
          justifyContent: "space-between",
          // backgroundColor: "red",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: '400px'}}>
          <Typography variant="h2">{currentProduct[0]}</Typography>
          <Typography sx={{padding: '30px 0px'}} variant="body1">{currentProduct[1]}</Typography>
          <Btn text={"VIEW MORE"} />
        </Box>
        <Box sx={{ width: "450px" }}>
          <img width="100%" src={currentProduct[2]} alt={currentProduct[0]} />
        </Box>
      </Stack>
      <Stack direction="row" sx={{justifyContent: 'space-between', alignItems: 'center'}}>
        <Box sx={{display: 'flex',flexDirection: 'row'}}>
        {Array.from({ length: products.length }).map((element, index) => (
          <Box
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
              minWidth: "0px",
              minHeight: "0px",
              width: "12px",
              height: "12px", 
              borderRadius: '50%',
              cursor: 'pointer'
            }}
          />
        ))}
        </Box>
        <IconBtn icon={<ArrowDown/>} on_Click={handleArrowDown}/>
        <Stack direction='row'>
        <IconButton href="/">
          <FacebookIcon/>
        </IconButton>
        <IconButton href="/">
          <XIcon/>
        </IconButton>
        <IconButton href="/">
          <InstagramIcon/>
        </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProductCarousal;
