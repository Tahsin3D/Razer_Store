/* eslint-disable react/prop-types */
import { Button, Paper } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SearchOffIcon from '@mui/icons-material/SearchOff';
import IconBtn from "./IconBtn";

const Search = ({ largeScreen }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const inputRef = useRef(null);

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
    inputRef.current?.focus()
  },[showSearch])
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
        paddingLeft: '20px'
      }}
    >
      <Paper
        id="search-paper"
        sx={{
          position: "absolute",
          right: largeScreen ? "30px" : "10px",
          top: largeScreen ? "66px" : "70px",
          display: showSearch ? "flex" : "none",
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "2px solid #27f026",
          height: '40px',
          alignItems: 'center',
          overflow: 'hidden'
        }}
      >
        <input
          id="search-bar"
          label="searchField"
          name="searchField"
          type="text"
          ref={inputRef}
          placeholder="Search"
          style={{
            color: "black",
            backgroundColor: "white",
            paddingLeft: "8px",
            height: '100%',
            border: 'none'
          }}
          value={searchValue}
          onChange={handleSearchChange}
        />
        <Button type="submit" sx={{color: 'black', backgroundColor: '#27f026', height: '100%', fontWeight: 'bold', borderRadius: '0px'}}>
          Search
        </Button>
      </Paper>
      <IconBtn id={'search-btn'} icon={showSearch?<SearchOffIcon sx={{fill: '#27f026'}}/>:<SearchIcon sx={{ pointerEvents: "none", fill: 'gray' }} />} on_Click={revealSearch_search}/>
    </form>
  );
};

export default Search;
