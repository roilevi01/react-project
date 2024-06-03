import React from "react";
import LeftNavBar from "./left-navigation/LeftNavBar";
import { AppBar, Toolbar } from "@mui/material";
import { MenuProvider } from "./menu/MenuProvider";
import RightNavBar from "./right-navigation/RightNavBar";

export default function NavBar() {
  return (
    <MenuProvider>
      <AppBar position="sticky" color="primary" elevation={10}>
        <Toolbar className="appBar" sx={{ justifyContent: "space-between" }}>
          <LeftNavBar />
          <RightNavBar />
        </Toolbar>
      </AppBar>
    </MenuProvider>
  );
}
