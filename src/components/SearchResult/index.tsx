import React from "react";
import { connect } from "react-redux";

import Loading from "../Loading";
import Profile from "../Profile";
import RepositoriesResult from "../RepositoriesResult";

import { Container } from "./styles";

import { StoreState } from "../../stores/reducers/types";
import { StoreActions } from "../../stores/actions/types";
import { SearchResultProps } from "./types";

const SearchResult: React.FC<SearchResultProps> = props => {
  return (
    <Container>
      {/* {props.loading && <Loading />} */}
      <Profile />
      <RepositoriesResult />
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => ({
  theme: state.theme,
  loading: state.loading
});

const mapDispatchToProps = (dispatch: (dispatch: StoreActions) => void) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
