import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import PageHeader from "../../components/PageHeader";
import axios from "axios";
import CardsFeedback from "../components/CardsFeedback";

export default function CardsPage() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState();

  useEffect(() => {
    const getCardsData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"
        );
        const data = response.data;
        setCards(data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
      }
    };

    getCardsData();
  }, []);

  const handleCardDelete = (id) => {
    console.log("you deleted card no" + id);
  };

  const handleCardLike = (id) => {
    console.log("you liked card no" + id);
  };

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
