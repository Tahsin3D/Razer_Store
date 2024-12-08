import { Box, Button, Stack } from "@mui/material";
import logo from "../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

// import { Link } from "react-router-dom";
import Search from "./Search";
import { useEffect, useState } from "react";
import IconBtn from "./IconBtn";

const Navbar = () => {
  const [currentNavlink, setCurrentNavlink] = useState("Home");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "Home",
    "Hardware",
    "Software",
    "Community",
    "Store",
    "Support",
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const largeScreen = windowWidth > 1024;

  useEffect(() => {
    const changeWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleMenuClick = (event) => {
      const elementsToNotCloseMenu = [
        ...links.map((link) => document.getElementById(link)),
        document.getElementById("menu-btn"),
        document.getElementById("menu-bar"),
      ];

      if (!elementsToNotCloseMenu.includes(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", changeWidth);
    document.addEventListener("click", handleMenuClick);

    return () => {
      window.removeEventListener("resize", changeWidth);
      document.removeEventListener("click", handleMenuClick);
    };
  }, []);

  const linkStyle = {
    display: menuOpen ? "flex" : "none",
    position: "absolute",
    right: "0",
    flexDirection: "column",
    top: menuOpen ? "60px" : "-350px",
    width: "40%",
    backgroundColor: "black",
    borderRadius: "0px 0px 0px 10px",
    padding: "20px",
  };

  return (
    <Stack
      sx={{
        position: "absolute",
        padding: largeScreen? '40px 70px': '30px 10px',
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: { xs: "40px", lg: "50px" },
        backgroundColor: menuOpen ? "black" : "transparent",
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
          id="menu-bar"
          sx={!largeScreen ? linkStyle : { position: "relative" }}
        >
          {links.map((element) => (
            <Button
              key={element}
              id={element}
              onClick={() => {
                setCurrentNavlink(element);
              }}
              style={{
                position: "relative",
                color: currentNavlink === element ? "#27f026" : "gray",

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

        <Search largeScreen={largeScreen} />

        <Box sx={{ display: largeScreen ? "none" : "block", paddingLeft: '16px' }}>
          <IconBtn
            id={"menu-btn"}
            on_Click={toggleMenu}
            icon={menuOpen ? (<MenuOpenIcon style={{ fill: "#27f026", pointerEvents: "none" }}/>) : (<MenuIcon style={{ pointerEvents: "none", fill: 'gray' }} />)}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Navbar;
