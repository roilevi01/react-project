import React from "react";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

export default function CardDetailsPage() {
  const { id } = useParams();
  return (
    <Container>
      <PageHeader
        title="Card details"
        subtitle="Here you can find all the details about specific card"
      />
      <Typography>details of card {id}</Typography>
    </Container>
  );
}
