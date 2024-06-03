import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import { useUser } from "../../../users/providers/UseProvider";
import useCards from "../../hooks/useCards";
import ROUTES from "../../../routes/routesModel";
import PageHeader from "../../../components/PageHeader";
import AddNewCardButton from "./AddNewCardButton";
import CardsFeedback from "../CardsFeedback";

export default function FavCards() {
  const {
    filterCards,
    error,
    isLoading,
    handleGetFavCards,
    handleDeleteCard,
    handleCardLike,
  } = useCards();

  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(ROUTES.CARDS);
    } else {
      handleGetFavCards();
    }
  }, [user, navigate, handleGetFavCards]);

  const handleDelete = async (id) => {
    await handleDeleteCard(id);
    await handleGetFavCards();
  };
  const handleLike = async (id) => {
    await handleCardLike(id);
    await handleGetFavCards();
  };
  return (
    <Container>
      <PageHeader
        title="Favorite Watch"
        subtitle="On this page you can find all your Watch that you liked from all categories"
      />
      <CardsFeedback
        isLoading={isLoading}
        error={error}
        cards={filterCards}
        handleDelete={handleDelete}
        handleLike={handleLike}
      />
      <AddNewCardButton />
    </Container>
  );
}
