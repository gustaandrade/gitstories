import React from "react";

import Header from "../../components/Header";
import HomeBody from "../../components/HomeBody";

import { Container } from "./styles";

import { HomeProps } from "./types";

const Home: React.FC<HomeProps> = props => {
  return (
    <Container>
      <Header
        withLogo={false}
        theme={props.theme}
        changeTheme={props.changeTheme}
      />
      <HomeBody theme={props.theme} changeTheme={props.changeTheme} />
    </Container>
  );
};

export default Home;
