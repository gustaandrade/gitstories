import React from "react";

import Header from "../../components/Header";
import HomeBody from "../../components/HomeBody";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header withTitle={false} />
      <HomeBody />
    </Container>
  );
};

export default Home;
