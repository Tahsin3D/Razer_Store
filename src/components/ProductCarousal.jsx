import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  products,
  Btn,
  ArrowDown,
  FacebookIcon,
  XIcon,
  InstagramIcon,
  ShareIcon,
  CloseIcon,
} from "../utils";
import IconBtn from "./IconBtn";
import { useSelector } from "react-redux";
import gsap from "gsap";

const ProductCarousal = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [shareBtnExpand, setShareBtnExpand] = useState(false);
  const [startXTouch, setStartXTouch] = useState(0);

  const largeScreen = useSelector((state) => state.screenSizes.largeScreen);
  const productsToShow = products.slice(0, 3);

  const handleClick = (index) => {
    if (index !== currentProductIndex) {
      setCurrentProductIndex(index);
    }
  };

  const handleArrowDown = () => {
    const sectionPosition =
      document.getElementById("product-section").getBoundingClientRect().top +
      window.scrollY;
    const offset = 60; // Adjust for a 60px margin
    const offsetPosition = sectionPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const showShareBtn = () => {
    setShareBtnExpand(!shareBtnExpand);
  };

  const goToNextProduct = () => {
    setCurrentProductIndex(
      (previousIndex) => (previousIndex + 1) % productsToShow.length
    );
  }
  
  const goToPrevProduct = () => {
    setCurrentProductIndex(
      (previousIndex) => (previousIndex - 1 + productsToShow.length) % productsToShow.length
    );
  }
  

  useEffect(() => {
    gsap.fromTo(
      ".fade-in",
      { opacity: 0, y: 30 }, // Start state: invisible and slightly below
      {
        opacity: 1,
        y: 0,
        duration: 0.6, // Animation duration
        stagger: 0.2, // Delay between elements
        ease: "power2.out", // Easing function
      }
    );
  },[currentProductIndex])
  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNextProduct();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentProductIndex, productsToShow]);

  const currentProduct = productsToShow[currentProductIndex];

  const handleTouchStart = (e) => {
    setStartXTouch(e.touches[0].clientX);
  };
  const handleTouchEnd = () => {
    setStartXTouch(0);
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;

    if (startXTouch === 0) return;

    const diff = currentX - startXTouch;

    if (diff > 50) {
      goToPrevProduct();
      setStartXTouch(0);
    } else if (diff < -50) {
      goToNextProduct();
      setStartXTouch(0);
    }
  };

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
          width: "100%",
        }}
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchMove={(e) => handleTouchMove(e)}
        onTouchEnd={(e) => handleTouchEnd(e)}
      >
        <Box
          sx={{
            width: largeScreen ? "50%" : "100%",
            height: largeScreen ? "80%" : "50%",
            paddingTop: "10px",
          }}
        >
          <Typography
            sx={{ fontSize: largeScreen ? "4rem" : "3rem" }}
            variant="h2"
            className="fade-in"
          >
            {currentProduct.name}
          </Typography>
          <Typography
            sx={{ paddingBottom: "20px", color: "gray" }}
            variant="body1"
            className="fade-in"
          >
            {currentProduct.description}
          </Typography>
          <Box className='fade-in'>
          <Btn  text={"VIEW MORE"} />
          </Box>
        </Box>
        <Box
          sx={{
            width: largeScreen ? "40%" : "100%",
            maxWidth: largeScreen ? "400px" : "250px",
            height: largeScreen ? "80%" : "50%",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          <img
          className="fade-in"
            style={{
              userSelect: "none",
              WebkitUserDrag: "none",
              pointerEvents: "none",
              marginTop: "0px",
              filter:
                "drop-shadow(0 0 5px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 10px rgba(255, 255, 255, 0.6))",
            }}
            width="100%"
            src={currentProduct.image}
            alt={currentProduct.name}
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
          zIndex: 10,
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
          {Array.from({ length: productsToShow.length }).map(
            (element, index) => (
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
            )
          )}
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
