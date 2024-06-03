import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import useCards from "../../../../cards/hooks/useCards";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const [searchParams, setSearch] = useSearchParams();
  const { handleSearchCards } = useCards();

  const handleSearch = () => {
    const query = searchParams.get("q");
    handleSearchCards(query);
  
  };

  const handleChange = ({ target }) => {
    setSearch({ q: target.value });
    handleSearchCards(target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }} value={searchParams.get("q") ?? ""}>
      <Toolbar>
        <Search>
          <SearchIconWrapper>
            <IconButton onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={handleChange}
            value={searchParams.get("q") ?? ""}
          />
        </Search>
      </Toolbar>
    </Box>
  );
}
