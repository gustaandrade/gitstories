import React from "react";
import { connect } from "react-redux";
import { FaStar } from "react-icons/fa";
import { GoRepoForked, GoEye } from "react-icons/go";
import { IoMdGitBranch } from "react-icons/io";
import { BsClock, BsClockHistory } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";

import {
  Container,
  Row,
  TitleArea,
  IconArea,
  Icon,
  Title,
  Paragraph
} from "./styles";

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
            <Icon>
              <RiGitRepositoryLine size="20" color={props.theme.icon} />
              <Paragraph>
                Language:{" "}
                {props.repository.mainLanguage
                  ? props.repository.mainLanguage
                  : "Unknown"}
              </Paragraph>
            </Icon>

            <Icon>
              <IoMdGitBranch size="20" color={props.theme.icon} />
              <Paragraph>Branch: {props.repository.defaultBranch}</Paragraph>
            </Icon>
          </Row>

          <Row>
            <Icon>
              <BsClock size="20" color={props.theme.icon} />
              <Paragraph>
                Created on{" "}
                {new Date(props.repository.createdAt).toLocaleDateString(
                  "en-US"
                )}
              </Paragraph>
            </Icon>

            <Icon>
              <BsClockHistory size="20" color={props.theme.icon} />
              <Paragraph>
                Last updated on{" "}
                {new Date(props.repository.updatedAt).toLocaleDateString(
                  "en-US"
                )}
              </Paragraph>
            </Icon>
          </Row>
        </>
      )}
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => ({
  theme: state.theme
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Repository);
