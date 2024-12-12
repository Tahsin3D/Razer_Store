import { Box, Stack, Typography } from "@mui/material";
import bg from "../assets/background.jpg";
import { useSelector } from "react-redux";

const CommunitySection = () => {

    const largeScreen = useSelector((state) => state.screenSizes.largeScreen);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        backgroundColor: "rgb(22,22,22)",
      }}
    >
      {/* Background Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom right",
            backgroundRepeat: "no-repeat",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to right, rgba(22,22,22, 1) 20%, rgba(22,22,22, 0) 90%)",
            },
          }}
        />

        <Typography
          variant="h2"
          sx={{
            fontSize: largeScreen ? "4rem" : "3rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          RAZER <br />
          INSIDER
        </Typography>
        <Typography
          variant="body2"
          sx={{
            zIndex: 1,
            color: "#27f026",
            fontWeight: 'bold'
          }}
        >
          FROM GAMERS TO GAMERS
        </Typography>
      </Box>

      <Stack
        direction="row"
        spacing={2}
        sx={{
          marginTop: "20px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            flex: 1,
            marginLeft: "auto", 
            maxWidth: "500px",
            position: "relative",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: "right",
              padding: "10px",
              color: "#333",
              fontWeight: "bold",
            }}
          >
            BREAKING THE STAGE WITH RAZER
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default CommunitySection;
