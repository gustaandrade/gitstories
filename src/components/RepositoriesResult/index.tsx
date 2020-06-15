import React, { useEffect } from "react";
import { connect } from "react-redux";

import Repository from "../Repository";

import { Container } from "./styles";

import {
  loadProfileSearch,
  loadRepositoriesSearch,
  setLoading
} from "../../stores/actions";
import { StoreActions } from "../../stores/actions/types";
import { StoreState } from "../../stores/reducers/types";
import { ProfileProps } from "./types";

const RepositoriesResult: React.FC<ProfileProps> = props => {
  useEffect(() => {
    props.setLoading();
    props.loadProfileSearch("gustaandrade");
    props.loadRepositoriesSearch("gustaandrade");
  });

  return (
    <Container>
      {props.repositories &&
        props.repositories
          .sort((a, b) => b.stargazers - a.stargazers)
          .map(repo => <Repository repository={repo} key={repo.id} />)}
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => ({
  theme: state.theme,
  profile: state.profile!,
  repositories: state.repositories,
  loading: state.loading
});

const mapDispatchToProps = (dispatch: (dispatch: StoreActions) => void) => ({
  loadProfileSearch: (user: string) => dispatch(loadProfileSearch(user)),
  loadRepositoriesSearch: (user: string) =>
    dispatch(loadRepositoriesSearch(user)),
  setLoading: () => dispatch(setLoading())
});

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesResult);
