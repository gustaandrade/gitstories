import React from "react";
import { connect } from "react-redux";
import { FaStar } from "react-icons/fa";
import { GoRepoForked, GoEye } from "react-icons/go";

import {
  Container,
  Row,
  TitleArea,
  IconArea,
  Icon,
  Title,
  Paragraph,
  Text
} from "./styles";

import { StoreActions } from "../../stores/actions/types";
import { StoreState } from "../../stores/reducers/types";
import { RepositoryProps } from "./types";

const Repository: React.FC<RepositoryProps> = props => {
  return (
    <Container
      href={props.repository.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.repository && (
        <>
          <Row>
            <TitleArea>
              <Title>{props.repository.name}</Title>
            </TitleArea>

            <IconArea>
              <Icon>
                <GoRepoForked size="20" color={props.theme.icon} />
                <Title>{props.repository.forks}</Title>
              </Icon>
              <Icon>
                <GoEye size="20" color={props.theme.icon} />
                <Title>{props.repository.watchers}</Title>
              </Icon>
              <Icon>
                <FaStar size="20" color={props.theme.icon} />
                <Title>{props.repository.stargazers}</Title>
              </Icon>
            </IconArea>
          </Row>

          <Row>
            <Paragraph>
              {props.repository.description
                ? props.repository.description
                : "No description."}
            </Paragraph>
          </Row>

          <Row>
            <Paragraph>
              {props.repository.mainLanguage
                ? props.repository.mainLanguage
                : "Unknown"}
            </Paragraph>
            <Paragraph>{props.repository.defaultBranch}</Paragraph>
          </Row>

          <Row>
            <Paragraph>{props.repository.createdAt}</Paragraph>
            <Paragraph>{props.repository.updatedAt}</Paragraph>
          </Row>
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
