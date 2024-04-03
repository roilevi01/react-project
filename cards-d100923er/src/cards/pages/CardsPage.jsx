import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import axios from "axios";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";

export default function CardsPage() {
  const {
    cards,
    error,
    isLoading,
    getAllCards,
    handleCardLike,
    handleCardDelete,
  } = useCards();

  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <div>
      <PageHeader
        title="Cards"
        subtitle="On this page you can find all bussines cards from all categories"
      />
      <CardsFeedback
        cards={cards}
        handleDelete={handleCardDelete}
        handleLike={handleCardLike}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}
