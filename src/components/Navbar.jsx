import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import { logo } from "../utils/constatnt";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link
      to="/"
      style={{
        dsiplay: "flex",
        alignItems: "center",
      }}
    >
      <img src={logo} alt="logo" width="50" height="50" />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
