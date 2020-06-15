import React from "react";
import { connect } from "react-redux";

import Repository from "../Repository";

import { Container } from "./styles";

import { StoreState } from "../../stores/reducers/types";
import { RepositoriesResultProps } from "./types";

const RepositoriesResult: React.FC<RepositoriesResultProps> = props => {
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
  repositories: state.repositories
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesResult);
