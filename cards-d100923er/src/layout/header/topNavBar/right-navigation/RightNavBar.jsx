import { Box, IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import React from "react";
import SearchBar from "./SearchBar";
import Logged from "./Logged";

import NotLogged from "./NotLogged";
import { useUser } from "../../../../users/providers/UseProvider";
import { useTheme } from "../../../../providers/CusromThemeProvider";

export default function RightNavBar() {
  const { user } = useUser();
  const { isDark, toggleDarkMode } = useTheme();

  return (
    <>
      <SearchBar />
      <Box
        sx={{
          display: { xs: "none", md: "inline-flex" },

          alignItems: "center",
        }}
      >
        <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        {user && <Logged />}

        {!user && <NotLogged />}
      </Box>
    </>
  );
}
