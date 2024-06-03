import { Avatar, IconButton } from "@mui/material";
import React from "react";
import NavBarLink from "../../../../routes/components/NavBarLink";
import ROUTES from "../../../../routes/routesModel";

export default function LogoIcon() {
  return (
    <>
      <NavBarLink to={ROUTES.ROOT}>
        <IconButton>
          <Avatar
            src="https://m.media-amazon.com/images/I/61IduqXygwL._AC_UY350_.jpg"
            alt="watch icon"
          />
        </IconButton>
      </NavBarLink>
    </>
  );
}
