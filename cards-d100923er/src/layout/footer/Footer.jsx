import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import Favorite from "@mui/icons-material/Favorite";
import { useUser } from "../../users/providers/UseProvider";
import PortraitIcon from "@mui/icons-material/Portrait";

export default function Footer() {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <Paper
      elevation={3}
      sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="About"
          icon={<InfoIcon />}
          onClick={() => navigate(ROUTES.ABOUT)}
        />
        {user && (
          <BottomNavigationAction
            label="Favorite"
            icon={<Favorite />}
            onClick={() => navigate(ROUTES.FAV_CARDS)}
          />
        )}
        {(user?.isAdmin || user?.isBusiness) && (
          <BottomNavigationAction
            label="MY CARDS"
            icon={<PortraitIcon />}
            onClick={() => navigate(ROUTES.MY_CARDS)}
          />
        )}
      </BottomNavigation>
    </Paper>
  );
}
