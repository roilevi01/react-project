import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Typography } from "@mui/material";

export default function Countries() {
  const [countriesList, setCountriesList] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getAllCountries = async () => {
    try {
      setCountriesList([]);
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const data = response.data;
      setCountriesList(data);
    } catch (error) {
      console.log("error ", error);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div>
      {countriesList.length === 0 ? (
        <Typography>טוען..</Typography>
      ) : (
        <Box>
          <Button onClick={getAllCountries}>Refresh</Button>
          {countriesList.map((country, index) => (
            <Box key={index}>
              <Typography>{country.name.common}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </div>
  );
}
