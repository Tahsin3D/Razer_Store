/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Stack } from "@mui/material";
import logo from "../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Search from "./Search";
import { useEffect, useState } from "react";
import IconBtn from "./IconBtn";
import { useSelector } from "react-redux";
import { BorderLeft } from "@mui/icons-material";

const Navbar = () => {
  const [currentNavlink, setCurrentNavlink] = useState("Home");
  const largeScreen = useSelector((state) => state.screenSizes.largeScreen);
  const [enableBackground, setEnableBackground] = useState(false);

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

  useEffect(() => {
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

    document.addEventListener("click", handleMenuClick);

    return () => {
      document.removeEventListener("click", handleMenuClick);
    };
  }, []);

  const handleBackgroundDisplay = () => {
    window.scrollY > 40
      ? setEnableBackground(true)
      : setEnableBackground(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleBackgroundDisplay);

    return () => {
      window.addEventListener("scroll", handleBackgroundDisplay);
    };
  }, []);

  const linkStyle = {
    display: menuOpen ? "flex" : "none",
    position: "absolute",
    right: "0",
    flexDirection: "column",
    top: menuOpen ? "60px" : "-350px",
    width: "40%",
    backgroundColor: "rgb(22,22,22)",
    borderRadius: "0px 0px 0px 10px",
    padding: "20px",
    borderLeft: '1px solid gray',
    borderBottom: '1px solid gray',
  };

  return (
    <Stack
      sx={{
        position: "fixed",
        padding: largeScreen ? "30px 70px" : "30px 10px",
        width: "100%",
        justifyContent: 'center',
        height: largeScreen ? "50px" : "40px",
        backgroundColor: enableBackground
          ? "rgba(22,22,22,1)"
          : menuOpen
          ? "rgba(22,22,22,1)"
          : "rgba(22,22,22,0)",
        borderBottom: enableBackground
          ? "1px solid rgba(128,128,128,1)"
          : "1px solid rgba(255,255,255,0)",
        zIndex: 100,
        transition: "all 0.3s ease",
      }}
      direction="row"
    >
      <Box sx={{
        display: 'flex',
        alignItems: "center",
        width: '100%',
        justifyContent: "space-between",
        maxWidth: '1400px'
      }}>
        <Button to="/" style={{ height: largeScreen ? "40px" : "35px" }}>
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

          <Search />

          <Box
            sx={{
              display: largeScreen ? "none" : "block",
              paddingLeft: "16px",
            }}
          >
            <IconBtn
              id={"menu-btn"}
              on_Click={toggleMenu}
              icon={
                menuOpen ? (
                  <MenuOpenIcon
                    style={{ fill: "#27f026", pointerEvents: "none" }}
                  />
                ) : (
                  <MenuIcon style={{ pointerEvents: "none", fill: "gray" }} />
                )
              }
            />
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Navbar;
