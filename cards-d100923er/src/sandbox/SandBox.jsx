import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavItem from "../routes/components/NavItem";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function SandBox() {
  return (
    <div>
      <AppBar position="sticky" color="transparent">
        <Toolbar></Toolbar>
      </AppBar>

      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
