/* eslint-disable react/prop-types */
import { Box, IconButton, Stack, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import CloseIcon from "@mui/icons-material/Close";
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
        padding: largeScreen ? "0px 70px " : "20px",
        width: "100%",
        height: "100%",
        justifyItems: "center",
      }}
    >
      <Stack
        direction="row"
        sx={{
          height: "90%",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: largeScreen ? "row" : "column",
          maxWidth: "1400px",
        }}
      >
        <Box
          sx={{
            width: largeScreen ? "50%" : "100%",
            height: largeScreen ? "80%" : "50%",
            paddingTop: "10px",
          }}
        >
          <Typography
            sx={{ fontSize: largeScreen ? "5rem" : "3rem" }}
            variant="h2"
          >
            {currentProduct[0].toUpperCase()}
          </Typography>
          <Typography
            sx={{ paddingBottom: "20px", color: "gray" }}
            variant="body1"
          >
            {currentProduct[1]}
          </Typography>
          <Btn text={"VIEW MORE"} />
        </Box>
        <Box
          sx={{
            width: largeScreen ? "40%" : "100%",
            maxWidth: largeScreen ? "400px" : "250px",
            height: largeScreen ? "80%" : "50%",
          }}
        >
          <img
            style={{
              pointerEvents: 'none',
              marginTop: "0px",
              filter:
                "drop-shadow(0 0 5px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 10px rgba(255, 255, 255, 0.6))",
            }}
            width="100%"
            src={currentProduct[2]}
            alt={currentProduct[0]}
          />
        </Box>
      </Stack>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          height: "10%",
          width: "100%",
          maxWidth: "1400px",
          zIndex: 10
        }}
      >
        {!largeScreen && (
          <IconBtn
            icon={
              shareBtnExpand ? (
                <CloseIcon sx={{ fill: "#27f026" }} />
              ) : (
                <ShareIcon />
              )
            }
            on_Click={showShareBtn}
            id={"share-btn"}
          />
        )}
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
            flexDirection: largeScreen ? "row" : "column",
            marginBottom: largeScreen ? "0" : "170px",
            display: largeScreen ? "flex" : shareBtnExpand ? "flex" : "none",
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
