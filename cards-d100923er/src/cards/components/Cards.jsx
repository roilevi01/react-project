import React from "react";
import CardComponent from "./card/CardComponent";
import { Container } from "@mui/material";
import "../../styles/styles.css";

export default function Cards({ cards, handleCardDelete, handleCardLike }) {
  return (
    <Container
      className="card"
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {cards.map((card) => (
        <CardComponent
          key={card._id}
          card={card}
          handleCardDelete={handleCardDelete}
          handleCardLike={handleCardLike}
        />
      ))}
    </Container>
  );
}
