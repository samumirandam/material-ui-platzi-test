import React from "react";
import { Stack, Typography } from "@mui/material";
import PaperInformation from "../paper-information";
import LocationInformation from "../location-information";

const Description = ({ userState }) => {
  const { bio } = userState;

  return (
    <>
      <Stack>
        {bio === null ? (
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab id ipsum
            recusandae dolorem totam quo voluptatibus. Atque ad labore quo
            veniam animi modi, amet a, ut ducimus rem adipisci nulla.
          </Typography>
        ) : (
          <Typography>{bio}</Typography>
        )}
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </>
  );
};

export default Description;
