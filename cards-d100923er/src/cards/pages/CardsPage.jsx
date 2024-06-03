import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";

import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import AddNewCardButton from "../components/card/AddNewCardButton";

export default function CardsPage() {
  const {
    filterCards,
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
        title="Watch 4 you"
        subtitle="On this page you can find all watch cards from all categories"
      />
      <CardsFeedback
        cards={filterCards}
        handleDelete={handleCardDelete}
        handleLike={handleCardLike}
        isLoading={isLoading}
        error={error}
      />
      <AddNewCardButton />
    </div>
  );
}
