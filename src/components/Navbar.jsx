import { Button, Stack } from "@mui/material";
import logo from "../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
// import MenuOpenIcon from "@mui/icons-material/MenuOpen";

// import { Link } from "react-router-dom";
import Search from "./Search";
import { useEffect, useState } from "react";

const Navbar = () => {

  const [currentNavlink, setCurrentNavlink] = useState("Home");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const largeScreen = windowWidth > 1024;

  const changeWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);


  const links = [
    "Home",
    "Hardware",
    "Software",
    "Community",
    "Store",
    "Support",
  ];

  const linkStyle = {
    display: menuOpen ? "flex" : "none",
    position: "absolute",
    alignContent: "center",
    left: "0",
    justifyContent: "center",
    flexDirection: "column",
    top: menuOpen ? "62px" : "-350px",
    width: "100%",
  };

  return (
    <Stack
      sx={{
        position: "absolute",
        p: "30px",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: { xs: "40px", lg: "50px" },
      }}
      direction="row"
    >
      <Button to="/" style={{ height: "40px" }}>
        <img src={logo} alt="logo" style={{ height: "100%" }} />
      </Button>

      <Stack direction="row" alignItems="center">
        <Stack
          direction="row"
          gap="20px"
          sx={!largeScreen ? linkStyle : { position: "relative" }}
        >
          {links.map((element) => (
            <Button
              key={element}
              onClick={() => {
                setCurrentNavlink(element);
              }}
              style={{
                position: "relative",
                color: currentNavlink===element? "#27f026": 'gray',

                textUnderlineOffset: "6px",
                textDecoration:
                  currentNavlink === element ? "underline" : "none",
                textDecorationThickness:
                  currentNavlink === element ? "2px" : "0px",
              }}
              href="#"
            >
              {element}
            </Button>
          ))}
        </Stack>

        <Search largeScreen={largeScreen}/>

        <Button
          sx={{ display: largeScreen ? "none" : "block" }}
          onClick={() => {
            toggleMenu();
          }}
        >
          <MenuIcon />
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
