import React from "react";
import { Card, CardActionArea } from "@mui/material";

import CardHeaderComponent from "./CardHeaderComponent";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";

export default function CardComponent({
  card,
  handleCardLike,
  handleCardDelete,
}) {
  return (
    <Card sx={{ width: 250, m: 2 }}>
      <CardActionArea>
        <CardHeaderComponent image={card.image} />
        <CardBody
          title={card.title}
          subtitle={card.subtitle}
          phone={card.phone}
          address={card.address}
          cardNumber={card.bizNumber}
        />
      </CardActionArea>
      <CardActionBar
        handleCardLike={handleCardLike}
        handleCardDelete={handleCardDelete}
        cardId={card._id}
      />
    </Card>
  );
}
