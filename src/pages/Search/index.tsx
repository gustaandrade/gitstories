import React from "react";

import { Container } from "./styles";

import Header from "../../components/Header";
import SearchResult from "../../components/SearchResult";

const Search: React.FC = () => {
  return (
    <Container>
      <Header withTitle={true} />
      <SearchResult />
    </Container>
  );
};

export default Search;
