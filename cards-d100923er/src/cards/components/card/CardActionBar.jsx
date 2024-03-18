import { Box, CardActions, IconButton } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function CardActionBar({
  handleCardLike,
  handleCardDelete,
  cardId,
}) {
  const handleCardEdit = (id) => {
    console.log("navigate to edit page for card " + id);
  };

  return (
    <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
      <Box>
        <IconButton onClick={() => handleCardDelete(cardId)}>
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={() => handleCardEdit(cardId)}>
          <ModeEditIcon />
        </IconButton>
      </Box>
      <Box>
        <IconButton>
          <CallIcon />
        </IconButton>
        <IconButton onClick={() => handleCardLike(cardId)}>
          <FavoriteIcon />
        </IconButton>
      </Box>
    </CardActions>
  );
}
