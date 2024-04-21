import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";

import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import AddNewCardButton from "../components/AddNewCardButton";

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
  }, [getAllCards]);

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
      <AddNewCardButton />
    </div>
  );
}
