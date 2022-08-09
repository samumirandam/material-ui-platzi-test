import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";

import { getGitHubUsers } from "./services/users";

import Searcher from "./components/searcher";
import UserCard from "./containers/user-card";

const defaultUser = "samumirandam";

const App = () => {
  const [inputUser, setInputUser] = useState(defaultUser);
  const [userState, setUserState] = useState(inputUser);
  const [notFound, setNotFound] = useState(false);

  const getUser = async (user) => {
    const userData = await getGitHubUsers(user);

    if (userState === defaultUser) {
      localStorage.setItem("defaultUser", userData);
    }

    if (userData.message === "Not Found") {
      const { defaultUserData } = localStorage;
      setInputUser(defaultUserData);
      setNotFound(true);
    } else {
      setUserState(userData);
    }
  };

  useEffect(() => {
    getUser(inputUser);
  }, [inputUser]);

  return (
    <Container
      sx={{
        background: "whitesmoke",
        width: "80vw",
        borderRadius: "16px",
        margin: "40px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Searcher setInputUser={setInputUser} />
      <UserCard userState={userState} />
    </Container>
  );
};

export default App;
