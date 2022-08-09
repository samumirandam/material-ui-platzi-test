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

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setInputUser(valueInput);
    }
  };

  return (
    <Stack
      direction="row"
      sx={{
        marginTop: "32px",
        width: "100%",
        position: "relative",
      }}
    >
      <TextField
        label="GitHub User"
        variant="outlined"
        placeholder="Buscar usuario de GitHub"
        size="small"
        value={valueInput}
        onChange={onSearchValueChange}
        onKeyDown={handleKeyPress}
        sx={{
          width: "100%",
        }}
      />
      <IconButton
        size="small"
        onClick={handleSubmit}
        sx={{ position: "absolute", right: "8px", top: "4px" }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export default Searcher;
