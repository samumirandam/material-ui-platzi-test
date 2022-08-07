import React, { useState } from "react";
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Searcher = ({ setInputUser }) => {
  const [valueInput, setValueInput] = useState("");

  const onSearchValueChange = (event) => {
    setValueInput(event.target.value);
  };

  const handleSubmit = () => {
    setInputUser(valueInput);
  };

  return (
    <Stack
      direction="row"
      sx={{
        marginTop: "32px",
        width: "80%",
      }}
    >
      <TextField
        label="GitHub User"
        variant="outlined"
        placeholder="Buscar usuario de GitHub"
        size="small"
        value={valueInput}
        onChange={onSearchValueChange}
        sx={{
          width: "90%",
        }}
      />
      <IconButton size="small" onClick={handleSubmit} sx={{ left: "-45px" }}>
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export default Searcher;
