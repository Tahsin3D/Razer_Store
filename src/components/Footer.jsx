import { Box, Stack } from "@mui/material";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";

const Footer = () => {
  const largeScreen = useSelector(state => state.screenSizes.largeScreen)
  const links = [
    "About Razer",
    "Press",
    "Careers",
    "Store Locator",
    "Affiliate",
    "Contact Us",
    "Newsletter",
    "Social",
  ];
  return (
    <Box
      sx={{
        width: "100%",
        background:
          "repeating-linear-gradient(-45deg, #111417 0%,#111417 0.25%, #181a1b 0.25%, #181a1b 0.5%)",
      }}
    >
      <Box
        sx={{
          maxWidth: "1400px",
          height: largeScreen? "50px": '250px',
          justifyContent: "center",
          justifyItems: "center",
          position: "relative",
          padding: "0px 70px",
          
        }}
      >
        <img
          height="20px"
          src={logo}
          alt="logo"
          style={{
            position: "absolute",
            top: largeScreen? '50%': "10%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <Stack
          direction="row"
          sx={{
            display: largeScreen? "flex": 'grid',
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            height: "100%",
            gridTemplateColumns: 'repeat(2, 1fr)'
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "19px",
              textAlign: 'center',
              flexDirection: largeScreen? 'row': 'column'
            }}
            >
            {links.slice(0, 4).map((link) => (
              <a href="#" key={link} style={{
                textDecoration: 'none',
                color: 'gray'
              }}>
                {link}
              </a>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "19px",
              flexDirection: largeScreen? 'row': 'column',
              textAlign: 'center'
            }}
          >
            {links.slice(4).map((link) => (
              <a href="#" key={link} style={{
                textDecoration: 'none',
                color: 'gray'
              }}>
                {link}
              </a>
            ))}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
