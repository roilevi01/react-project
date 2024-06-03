import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import { useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import { styled } from "@mui/material/styles";
import {
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Table,
  TableBody,
  tableCellClasses,
  TableCell,
  Box,
} from "@mui/material";
import MapPage from "../../sandbox/map/MapPage";

export default function CardDetailsPage() {
  const { id } = useParams();
  const { card, error, isLoading, getCardById } = useCards();
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  useEffect(() => {
    getCardById(id);
  }, [id, getCardById]);

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  return (
    <Container>
      <PageHeader
        title="Card details"
        subtitle="Here you can find all the details about specific card"
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>CARD Details</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Phone Number</StyledTableCell>
              <StyledTableCell align="right">Loction</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                ID Number:{id}
              </StyledTableCell>
              <StyledTableCell align="right">{card.title}</StyledTableCell>
              <StyledTableCell align="right">{card.email}</StyledTableCell>
              <StyledTableCell align="right">{card.phone}</StyledTableCell>
              <StyledTableCell align="right">
                {/* {card.address.country} */}
                <MapPage />
                <Box sx={{ width: 400, height: 400 }}></Box>
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
