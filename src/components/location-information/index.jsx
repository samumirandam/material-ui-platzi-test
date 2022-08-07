import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";

const LocationInformation = ({ userState }) => {
  const { location, twitter_username, blog, company } = userState;

  return (
    <Grid container>
      {location && (
        <Grid item xs={6}>
          <Stack>
            <LocationOnIcon />
            <Typography>{location}</Typography>
          </Stack>
        </Grid>
      )}
      {twitter_username && (
        <Grid item xs={6}>
          <Stack>
            <TwitterIcon />
            <Typography>{twitter_username}</Typography>
          </Stack>
        </Grid>
      )}
      {blog && (
        <Grid item xs={6}>
          <Stack>
            <LanguageIcon />
            <Typography>{blog}</Typography>
          </Stack>
        </Grid>
      )}
      {company && (
        <Grid item xs={6}>
          <Stack>
            <BusinessIcon />
            <Typography>{company}</Typography>
          </Stack>
        </Grid>
      )}
    </Grid>
  );
};

export default LocationInformation;
