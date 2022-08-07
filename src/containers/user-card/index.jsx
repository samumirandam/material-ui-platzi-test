import React from "react";
import { Avatar, CardMedia, Grid } from "@mui/material";

import PrincipalInformation from "../../components/principal-information";
import Description from "../../components/description";

const UserCard = ({ userState }) => {
  const { avatar_url, login } = userState;
  return (
    <Grid container>
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
        <PrincipalInformation userState={userState} />
        <Description userState={userState} />
      </Grid>
    </Grid>
  );
};

export default UserCard;
