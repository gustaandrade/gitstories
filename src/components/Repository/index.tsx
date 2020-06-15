import React from "react";
import { connect } from "react-redux";

import { Container, TitleArea, Title, Text } from "./styles";

import { StoreActions } from "../../stores/actions/types";
import { StoreState } from "../../stores/reducers/types";
import { RepositoryProps } from "./types";

const Repository: React.FC<RepositoryProps> = props => {
  return (
    <Container>
      {props.repository && (
        <>
          <TitleArea>
            <Text>{props.repository.name}</Text>
            <Text>{props.repository.fullName}</Text>
            <Text>{props.repository.url}</Text>
          </TitleArea>

          <TitleArea>
            <Text>{props.repository.description}</Text>
            <Text>{props.repository.mainLanguage}</Text>
            <Text>{props.repository.defaultBranch}</Text>
          </TitleArea>
        </>
      )}
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => ({
  theme: state.theme
});

const mapDispatchToProps = (dispatch: (dispatch: StoreActions) => void) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Repository);
