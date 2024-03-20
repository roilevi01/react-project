import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./routesModel";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import SandBox from "../sandbox/SandBox";
import Counter from "../sandbox/Counter";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.CARD_INFO + "/:id"} element={<CardDetailsPage />} />
      <Route path={ROUTES.SANDBOX} element={<SandBox />}>
        <Route path="counter" element={<Counter />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
