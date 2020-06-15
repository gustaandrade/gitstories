import React, { useEffect } from "react";
import { connect } from "react-redux";

import Loading from "../Loading";
import NotFound from "../NotFound";
import Profile from "../Profile";
import RepositoriesResult from "../RepositoriesResult";

import { Container } from "./styles";

import {
  loadProfileSearch,
  loadRepositoriesSearch,
  setLoading
} from "../../stores/actions";
import { StoreState } from "../../stores/reducers/types";
import { SearchResultProps } from "./types";
import { StoreActions } from "../../stores/actions/types";

const SearchResult: React.FC<SearchResultProps> = props => {
  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search).get("q");

    if (urlParam) {
      props.setLoading();
      props.loadProfileSearch(urlParam);
      props.loadRepositoriesSearch(urlParam);
    }
  }, [window.location.href]);

  console.log(props.profile);

  return (
    <Container>
      {props.loading && <Loading />}
      {!props.loading && (!props.profile || !props.profile?.id) && <NotFound />}
      {!props.loading && props.profile?.id && (
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

const mapDispatchToProps = (dispatch: (dispatch: StoreActions) => void) => ({
  loadProfileSearch: (user: string) => dispatch(loadProfileSearch(user)),
  loadRepositoriesSearch: (user: string) =>
    dispatch(loadRepositoriesSearch(user)),
  setLoading: () => dispatch(setLoading())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
