import { useCallback, useState } from "react";
import { getCard, getCards } from "../services/cardsApiService";
import { useSnack } from "../../providers/SnackbarProvider";

export default function useCards() {
  const [card, setCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const setSnack = useSnack();

  const getAllCards = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getCards();
      setCards(data);
      setSnack("success", "All the cards are here");
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [setSnack]);

  const getCardById = useCallback(async (id) => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getCard(id);
      setCard(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  const handleCardDelete = useCallback((id) => {
    console.log("you deleted card no" + id);
  }, []);

  const handleCardLike = useCallback((id) => {
    console.log("you liked card no" + id);
  }, []);

  return {
    cards,
    card,
    error,
    isLoading,
    getAllCards,
    getCardById,
    handleCardDelete,
    handleCardLike,
  };
}
