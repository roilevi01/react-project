import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./routesModel";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import SandBox from "../sandbox/SandBox";

import FormExample from "../sandbox/FormExample";
import LoginPage from "../users/pages/LoginPage";

import AddCardPage from "../cards/pages/AddCardPage";
import EditCardPage from "../cards/pages/EditCardPage";
import MyCards from "../cards/components/MyCards";
import MyFevCard from "../cards/components/card/MyFevCard";
import SignUpPage from "../users/pages/SignUpPage";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.CARD_INFO + "/:id"} element={<CardDetailsPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.CREATE_CARD} element={<AddCardPage />} />
      <Route path={ROUTES.EDIT_CARD + "/:id"} element={<EditCardPage />} />
      <Route path={ROUTES.FAV_CARDS} element={<MyFevCard />} />
      <Route path={ROUTES.MY_CARDS} element={<MyCards />} />
      <Route path={ROUTES.SANDBOX} element={<SandBox />}>
        <Route path="form" element={<FormExample />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
