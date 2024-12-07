/* eslint-disable react/prop-types */
import { Button, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ largeScreen }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const revealSearch_search = () => {
    setShowSearch(!showSearch);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchFor = searchValue.trim();
    //if input is something
    if (searchFor !== "") {
      console.log(`Searching for ${searchFor}`);
    }

    //cleanup
    setSearchValue("");
  };
  useEffect(() => {
    const elementsToNotCloseSearchField = [
      document.getElementById("search-btn"),
      document.getElementById("search-bar"),
      document.getElementById("search-paper"),
    ];

    const clickHandler = (event) => {
      if (!elementsToNotCloseSearchField.includes(event.target)) {
        setShowSearch(false);
      }
    };

    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        height: "40px",
        borderRadius: "4px",
        overflow: "hidden",
        display: "flex",
        alignItems: "stretch",
      }}
    >
      <Paper
        id="search-paper"
        sx={{
          position: "absolute",
          right: largeScreen ? "50px" : "160px",
          top: largeScreen ? "56px" : "15px",
          display: showSearch ? "block" : "none",
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "2px solid #27f026",
        }}
      >
        <input
          id="search-bar"
          label="searchField"
          name="searchField"
          type="text"
          placeholder="Search"
          style={{
            color: "black",
            backgroundColor: "white",
            paddingLeft: "8px",
          }}
          value={searchValue}
          onChange={handleSearchChange}
        />
        <Button type="submit">
          <SearchIcon sx={{ pointerEvents: "none", fill: "#27f026" }} />
        </Button>
      </Paper>
      <Button id="search-btn" onClick={revealSearch_search} sx={{}}>
        <SearchIcon sx={{ pointerEvents: "none" }} />
      </Button>
    </form>
  );
};

export default Search;
