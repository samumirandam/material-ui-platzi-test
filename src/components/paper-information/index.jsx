import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

const PaperInformation = ({ userState }) => {
  const { public_repos, followers, following } = userState;
  return (
    <Paper elevation={3}>
      <Stack
        spacing={3}
        direction="row"
        sx={{ justifyContent: "space-evenly", padding: "20px" }}
      >
        <Stack sx={{ alignItems: "center" }}>
          <Typography variant="h5">Public Repos</Typography>
          <Typography variant="h6">{public_repos}</Typography>
        </Stack>
        <Stack sx={{ alignItems: "center" }}>
          <Typography variant="h5">Followers</Typography>
          <Typography variant="h6">{followers}</Typography>
        </Stack>
        <Stack sx={{ alignItems: "center" }}>
          <Typography variant="h5">Following</Typography>
          <Typography variant="h6">{following}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default PaperInformation;
