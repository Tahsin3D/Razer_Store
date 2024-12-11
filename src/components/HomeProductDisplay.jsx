import { Box, Typography } from "@mui/material";
import Btn from "./Btn";
import IconBtn from "./IconBtn";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useSelector } from "react-redux";

const HomeProductDisplay = ({ product }) => {
  const largeScreen = useSelector((state) => state.screenSizes.largeScreen);
  return (
    <Box
      sx={{
        // backgroundColor: "red",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          paddingLeft: largeScreen ? "100px" : "0px",
            // backgroundColor: 'red',
          flexDirection: largeScreen ? "row" : "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: largeScreen ? "400px" : "80%", 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
          {!largeScreen && <IconBtn icon={<KeyboardArrowLeftIcon />} />}
          <img width="60%" src={product.image} alt={product.name} />
          {!largeScreen && <IconBtn icon={<KeyboardArrowRightIcon />} />}
        </Box>
        <Box
          sx={{
            padding: "50px",
            width: largeScreen ? "70%" : "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Typography variant="h4">{product.name.toUpperCase()}</Typography>
          <Typography variant="body1" color="gray">
            {product.description}
          </Typography>
          <Btn text={"View More"} />
        </Box>
      </Box>
      {largeScreen && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <IconBtn icon={<KeyboardArrowRightIcon />} />
          <IconBtn icon={<KeyboardArrowLeftIcon />} />
        </Box>
      )}
    </Box>
  );
};

export default HomeProductDisplay;
