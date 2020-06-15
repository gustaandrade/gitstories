import React from "react";

import Header from "../../components/Header";
import MainInput from "../../components/MainInput";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header withTitle={false} />
      <MainInput />
    </Container>
  );
};

export default Home;
