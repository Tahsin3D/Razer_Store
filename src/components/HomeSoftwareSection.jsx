import { Box, Typography } from "@mui/material";
import commsImg from "../assets/head.png";
import synapseImg from "../assets/cloud.png";
import arenaImg from "../assets/building.png";
import cortexImg from "../assets/circle.png";
import { useSelector } from "react-redux";

const HomeSoftwareSection = () => {
  const largeScreen = useSelector((state) => state.screenSizes.largeScreen);

  const elements = [
    { title: "RAZER COMMS", image: commsImg },
    { title: "RAZER SYNAPSE", image: synapseImg },
    { title: "RAZER ARENA", image: arenaImg },
    { title: "RAZER CORTEX", image: cortexImg },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "rgb(22,22,22)",
        width: "100%",
      }}
    >
      <Box
        sx={{
          maxWidth: "1400px",
          width: "100%",
          padding: largeScreen ? "70px" : "100px 20px",
          margin: "0px auto",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            paddingBottom: "50px",
            margin: "0 auto",
            width: largeScreen ? "400px" : "200px",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              zIndex: 1,
              color: "#27f026",
              fontWeight: "bold",
            }}
          >
            MORE PRODUCTS
          </Typography>
          <Typography variant="h4">RAZER SOFTWARE</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: largeScreen ? "row" : "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "70px 0px",
          }}
        >
          {elements.map((ele) => (
            <Box
              key={ele.title}
              sx={{
                width: largeScreen ? "200px" : "100%",
                height: "130px",
                border: "1px solid gray",
                display: "flex",
                alignItems: "center",
                flexDirection: largeScreen ? "column" : "row",
                justifyContent: largeScreen ? "center" : "flex-start",
                marginBottom: "20px",
                padding: "20px",
              }}
            >
              <img
                height="100px"
                style={{
                  paddingRight: largeScreen ? "0px" : "20px",
                }}
                src={ele.image}
                alt={ele.title}
              />
              <Typography
                variant="h6"
                fontSize="0.8rem"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  paddingTop: "10px",
                }}
              >
                {ele.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HomeSoftwareSection;
