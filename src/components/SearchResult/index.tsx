import React from "react";
import { connect } from "react-redux";

import Loading from "../Loading";
import NotFound from "../NotFound";
import Profile from "../Profile";
import RepositoriesResult from "../RepositoriesResult";

import { Container } from "./styles";

import { StoreState } from "../../stores/reducers/types";
import { SearchResultProps } from "./types";

const SearchResult: React.FC<SearchResultProps> = props => {
  return (
    <Container>
      {props.loading && <Loading />}
      {!props.loading && props.profile === null && <NotFound />}
      {!props.loading && props.profile && (
        <>
          <Profile />
          <RepositoriesResult />
        </>
      )}
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => ({
  profile: state.profile,
  loading: state.loading
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
