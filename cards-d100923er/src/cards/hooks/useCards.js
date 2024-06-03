import { useCallback, useEffect, useState } from "react";
import {
  changeLikeStatus,
  createCard,
  deleteCard,
  editCard,
  getCard,
  getCards,
  getMyCards,
} from "../services/cardsApiService";
import { useSnack } from "../../providers/SnackbarProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import normalizeCard from "../helpers/normalization/normalizeCard";
import useAxios from "../../hooks/useAxios";
import { useUser } from "../../users/providers/UseProvider";

export default function useCards() {
  const [card, setCard] = useState({});
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const setSnack = useSnack();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [filterCards, setFilterCards] = useState([]);
  const { user } = useUser();
  const [like, setLiked] = useState("");
  useAxios();
  const handleSearchCards = useCallback(
    (query) => {
      setFilterCards(
        cards.filter(
          (card) =>
            card.title.includes(query) || String(card.bizNumber).includes(query)
        )
      );
    },
    [cards]
  );
  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  useEffect(() => {
    handleSearchCards(query);
  }, [query, handleSearchCards]);

  const getAllCards = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getCards();
      setCards(data);
      setFilterCards(data);
      setSnack("success", "All the cards are here");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [setSnack]);

  const getCardById = useCallback(async (id) => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getCard(id);
      setCard(data);
      return data;
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleCreateCard = useCallback(
    async (cardFromClient) => {
      try {
        setError(null);
        setIsLoading(true);
        const card = await createCard(normalizeCard(cardFromClient));
        setCard(card);
        setSnack("success", "A new business card has been created");
        setTimeout(() => {
          navigate(ROUTES.ROOT);
        }, 1000);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    },
    [setSnack, navigate]
  );

  const handleUpdateCard = useCallback(
    async (cardId, cardFromClient) => {
      try {
        setIsLoading(true);
        const card = await editCard(cardId, normalizeCard(cardFromClient));
        setCard(card);
        setSnack("success", "The business card has been successfully updated");
        setTimeout(() => {
          navigate(ROUTES.ROOT);
        }, 1000);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    },
    [setSnack, navigate]
  );

  const handleGetMyCards = useCallback(async () => {
    setIsLoading(true);
    try {
      const cards = await getMyCards();
      setCards(cards);
      setFilterCards(cards);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleCardDelete = useCallback(
    async (id) => {
      try {
        setIsLoading(true);
        await deleteCard(id);
        setSnack("error", "You deleted card no " + id, "filled");
        setTimeout(() => {
          getAllCards();
        }, 1000);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    },
    [getAllCards, setSnack]
  );

  const handleCardLike = useCallback(
    async (id) => {
      try {
        const updatedCard = await changeLikeStatus(id);
        const isLiked = updatedCard.likes.includes(user._id);

        setCards((prevCards) =>
          prevCards.map((card) =>
            card._id === id ? { ...card, likes: updatedCard.likes } : card
          )
        );

        setFilterCards((prevFilterCards) => {
          if (isLiked) {
            return [...prevFilterCards, updatedCard];
          } else {
            return prevFilterCards.filter((card) => card._id !== id);
          }
        });

        return updatedCard;
      } catch (error) {
        setError(error.message);
      }
    },
    [user]
  );

  const handleGetFavCards = useCallback(async () => {
    setIsLoading(true);
    try {
      const allCards = await getCards();
      const favCards = allCards.filter((card) => card.likes.includes(user._id));
      setFilterCards(favCards);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [user]);
  return {
    cards,
    card,
    error,
    isLoading,
    getAllCards,
    getCardById,
    filterCards,

    handleCardDelete,
    handleCardLike,
    handleCreateCard,
    handleUpdateCard,
    handleGetFavCards,
    handleSearchCards,
    handleGetMyCards,
  };
}
