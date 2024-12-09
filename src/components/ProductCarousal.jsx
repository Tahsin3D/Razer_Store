/* eslint-disable react/prop-types */
import { Box, IconButton, Stack, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react";
import {
  products,
  Btn,
  ArrowDown,
  FacebookIcon,
  XIcon,
  InstagramIcon,
} from "../utils";
import IconBtn from "./IconBtn";
import { useSelector } from "react-redux";

const ProductCarousal = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [timerCount, setTimerCount] = useState(0);
  const [shareBtnExpand, setShareBtnExpand] = useState(false);

  const largeScreen = useSelector((state) => state.screenSizes.largeScreen);

  const handleClick = (index) => {
    if (index !== currentProductIndex) {
      setCurrentProductIndex(index);
      setTimerCount((prev) => prev + 1);
    }
  };

  const handleArrowDown = () => {
    console.log("arrow-down");
  };

  const showShareBtn = () => {
    setShareBtnExpand(!shareBtnExpand);
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
    <Box
      sx={{
        padding: largeScreen ? "70px" : "20px",
        width: "100%",
        height: "100%",
      }}
    >
      <Stack
        direction="row"
        sx={{
          height: "92%",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: largeScreen ? "row" : "column",
          paddingTop: largeScreen ? "0px" : "30px",
        }}
      >
        <Box sx={{width: '50%', height: '100%'}}>
          <Typography
            sx={{ fontSize: largeScreen ? "5rem" : "3rem" }}
            variant="h2"
          >
            {currentProduct[0].toUpperCase()}
          </Typography>
          <Typography
            sx={{ paddingBottom: "50px", color: "gray" }}
            variant="body1"
          >
            {currentProduct[1]}
          </Typography>
          <Btn text={"VIEW MORE"} />
        </Box>
        <Box sx={{ height: largeScreen ? "120%" : "70%" }}>
          <img height="100%" src={currentProduct[2]} alt={currentProduct[0]} />
        </Box>
      </Stack>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "end",
          height: "20%",
          paddingBottom: "0px",
        }}
      >
        
        {!largeScreen && <IconBtn
          icon={shareBtnExpand? <CloseIcon sx={{fill:'#27f026'}}/>: <ShareIcon />}
          on_Click={showShareBtn}
          id={"share-btn"}
        />}
        <Box sx={{ display: "flex", flexDirection: "row" }}>
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
                  backgroundColor:
                    index !== currentProductIndex ? "#d0ffd2" : "#26f027",
                },
                transition: "background-color 0.3s ease",
                minWidth: "0px",
                minHeight: "0px",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            />
          ))}
        </Box>
        <IconBtn
          icon={<ArrowDown sx={{ fill: "gray" }} />}
          on_Click={handleArrowDown}
        />
        <Stack
          direction="row"
          sx={{ 
            position: largeScreen ? "relative" : "absolute", 
            flexDirection: largeScreen? 'row': 'column',
            paddingBottom: largeScreen? '0': '50px',
            display: largeScreen?'flex': shareBtnExpand? 'flex': 'none'
          }}
        >
          <IconButton href="/">
            <FacebookIcon />
          </IconButton>
          <IconButton href="/">
            <XIcon />
          </IconButton>
          <IconButton href="/">
            <InstagramIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProductCarousal;
