import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import Logo from "../assets/Logo.png";
import SearchBar from "./SearchBar";

export const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: "0",
        justifyContent: "space-between",
      }}
    >
        <Link to="/" style={{display:'flex', alignItems:"center"}}>
            <img src={Logo} alt="" height={45}/>
        </Link>
        <SearchBar></SearchBar>
    </Stack>
  );
};

// export const Navbar;
