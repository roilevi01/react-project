import React from "react";
import { Box } from "@mui/material";
import LogoIcon from "../logo/LogoIcon";
import Logo from "../logo/Logo";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";
export default function LeftNavBar() {
  return (
    <Box>
      <LogoIcon />
      <Logo />
      <NavItem to={ROUTES.CARDS} label={"Cards"} />
      <NavItem to={ROUTES.ABOUT} label={"About"} />
      <NavItem to={ROUTES.SANDBOX} label={"Sandbox"} />
    </Box>
  );
}
