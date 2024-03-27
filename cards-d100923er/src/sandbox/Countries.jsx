import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";

export default function Countries() {
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    const getAllCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const data = response.data;
        setCountriesList(data);
      } catch (error) {
        console.log("error ", error);
      }
    };

    getAllCountries();
  }, []);

  return (
    <div>
      {countriesList.length === 0 ? (
        <Typography>טוען..</Typography>
      ) : (
        countriesList.map((country, index) => (
          <Box key={index}>
            <Typography>{country.name.common}</Typography>
          </Box>
        ))
      )}
    </div>
  );
}
