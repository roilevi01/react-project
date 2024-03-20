import React from "react";
import { Typography } from "@mui/material";

export default function Logo() {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          marginRight: 2,
          fontFamily: "fantasy",
          display: { xs: "none", md: "inline-flex" },
        }}
      >
        BCard
      </Typography>
    </>
  );
}
