import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NavItem from "../routes/components/NavItem";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function SandBox() {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem to="counter" lable="Counter page" sx={{ color: "black" }} />
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
