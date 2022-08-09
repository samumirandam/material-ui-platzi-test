import React from "react";
import { Avatar, CardMedia, Grid, Stack } from "@mui/material";

import PrincipalInformation from "../../components/principal-information";
import Description from "../../components/description";

const UserCard = ({ userState }) => {
  const { avatar_url, login } = userState;
  return (
    <Grid container spacing={2} sx={{ marginTop: "16px" }}>
      <Grid item xs={3}>
        <Avatar
          alt={`GitHub user avatar ${login}`}
          src={avatar_url}
          sx={{
            width: "100%",
            height: "auto",
          }}
        />
      </Grid>
      <Grid item xs={9}>
        <Stack direction={"column"} spacing={1} sx={{ padding: "0px 32px 32px 32px" }}>
          <PrincipalInformation userState={userState} />
          <Description userState={userState} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default UserCard;
