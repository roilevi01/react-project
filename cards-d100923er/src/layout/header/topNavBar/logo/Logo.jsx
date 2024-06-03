import React from "react";
import { Typography } from "@mui/material";
import NavBarLink from "../../../../routes/components/NavBarLink";
import ROUTES from "../../../../routes/routesModel";
import "../../../../styles/styles.css";

export default function Logo() {
  return (
    <>
      <NavBarLink to={ROUTES.ROOT}>
        <Typography
          className="title"
          variant="h4"
          sx={{
            marginRight: 2,
            fontFamily: "fantasy",
            display: { xs: "none", md: "inline-flex" },
          }}
        >
          watch4you
        </Typography>
      </NavBarLink>
    </>
  );
}
