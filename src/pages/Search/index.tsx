import React from "react";

import Header from "../../components/Header";
import SearchBody from "../../components/SearchBody";

const Search: React.FC = () => {
  return (
    <div>
      <Header withTitle={true} />
      <SearchBody />
    </div>
  );
};

export default Search;
