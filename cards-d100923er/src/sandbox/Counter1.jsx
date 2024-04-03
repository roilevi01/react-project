import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import useCounter from "./hooks/useCounter";
import useWindowSize from "./hooks/useWindowSize";
export default function Counter1() {
  const { width, height } = useWindowSize();

  const { counter, increment, decrement } = useCounter(100);

  console.log(width);
  console.log(height);
  return (
    <Box>
      <Button variant="contained" onClick={increment}>
        +
      </Button>
      <Button variant="contained" onClick={decrement}>
        -
      </Button>
      <Typography variant="h3">{counter}</Typography>
    </Box>
  );
}
