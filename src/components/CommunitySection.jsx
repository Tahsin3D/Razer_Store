import { Box, Stack, Typography } from "@mui/material";
import bg from "../assets/background.jpg";
import { useSelector } from "react-redux";
import Btn from "./Btn";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const CommunitySection = () => {
  const largeScreen = useSelector((state) => state.screenSizes.largeScreen);

  const cardDetails = [
    {
      title: "BREAKING THE STAGE WITH RAZER",
      desc: "Join us at the Six Invitational where we'll see new content showcases, developer and community panels.",
    },
    {
      title: "WELCOME TO TEAM RAZER, NEXTBIT!",
      desc: "We are excited to announce that Nextbit has joined the Razer family! We welcome the highly talented team.",
    },
    {
      title: "THE RAZER BLACKWIDOW CHROMA V2",
      desc: "The new Razer BlackWidow Chroma V2- now available with the Razer Mechanical Green, Orange and Yellow.",
    },
  ];
  return (
    <Box sx={{width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: "rgb(22,22,22)",
        borderBottom: '1px solid gray',
        
    }}>
        <Box
      sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        width: "100%",
        maxWidth: "1400px",
        paddingBottom: "70px",
      }}
    >
      {/* Background Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: largeScreen? "70px": '20px',
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
                "linear-gradient(to right, rgba(22,22,22, 1) 30%, rgba(22,22,22, 0) 90%)",
            },
          }}
        />

        <Typography
          variant="h2"
          sx={{
            fontSize: largeScreen ? "3rem" : "3rem",
            position: "relative",
            zIndex: 1,
            paddingBottom: "10px",
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
            fontWeight: "bold",
          }}
        >
          FROM GAMERS TO GAMERS
        </Typography>
      </Box>

      <Stack
        direction="row"
        sx={{
          marginTop: "20px",
          overflow: "hidden",
          padding: largeScreen?"70px 70px": '50px 20px 0px',
          justifyContent: "space-between",
          alignItems: 'center',
          flexDirection: largeScreen? 'row': 'column',
          width: '100%'

        }}
      >
        {cardDetails.map((element) => (
          <Box
            key={element.title}
            sx={{
              flex: 1,
              maxWidth: largeScreen? "270px": '500px',
              position: "relative",
              paddingBottom: '20px',
              marginBottom: '50px',
            //   backgroundColor:'red',
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h6"
                fontSize="0.8rem"
                sx={{
                  textAlign: "left",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {element.title}
              </Typography>
              <KeyboardArrowRightIcon
                sx={{ fill: "#27f026", marginLeft: "10px" }}
              />
            </Box>
            <Typography variant="body2" sx={{ color: "gray" }}>
              {element.desc}
            </Typography>
          </Box>
        ))}
      </Stack>
      <Box width="100%" sx={{ display: "flex", justifyContent: largeScreen?"center": 'left', maxWidth: '500px', width: '90%'}}>
        <Btn text={"JOIN COMMUNITY"} />
      </Box>
    </Box>
    </Box>
  );
};

export default CommunitySection;
