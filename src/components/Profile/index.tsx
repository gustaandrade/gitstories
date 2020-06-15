import React from "react";
import { connect } from "react-redux";
import {
  FaGithubAlt,
  FaGlobe,
  FaMapMarkerAlt,
  FaEnvelope,
  FaUserFriends,
  FaRegCalendarCheck
} from "react-icons/fa";
import { GoRepo } from "react-icons/go";

import {
  Container,
  FixedArea,
  InfoArea,
  Image,
  Title,
  Subtitle,
  Paragraph,
  Text
} from "./styles";

import ProfileItem from "../ProfileItem";

import {
  loadProfileSearch,
  loadRepositoriesSearch,
  setLoading
} from "../../stores/actions";
import { StoreActions } from "../../stores/actions/types";
import { StoreState } from "../../stores/reducers/types";
import { ProfileProps } from "./types";

const Profile: React.FC<ProfileProps> = props => {
  return (
    <Container>
      {props.profile && (
        <>
          <FixedArea>
            <Image src={props.profile.avatar} />
            <Title>{props.profile.name}</Title>
            <Subtitle>@{props.profile.login}</Subtitle>
          </FixedArea>

          <InfoArea>
            <Paragraph>{props.profile.bio}</Paragraph>

            <ProfileItem
              profileItem={props.profile.url}
              icon={<FaGithubAlt size="20" color={props.theme.icon} />}
              content={
                <a href={props.profile.url}>
                  <Text>{props.profile.url}</Text>
                </a>
              }
            />

            <ProfileItem
              profileItem={props.profile.blog}
              icon={<FaGlobe size="20" color={props.theme.icon} />}
              content={
                <a href={props.profile.blog}>
                  <Text>{props.profile.blog}</Text>
                </a>
              }
            />

            <ProfileItem
              profileItem={
                props.profile.email !== null ? props.profile.email : "private"
              }
              icon={<FaEnvelope size="20" color={props.theme.icon} />}
              content={
                <Text>
                  {props.profile.email !== null
                    ? props.profile.email
                    : "Private"}
                </Text>
              }
            />
            <ProfileItem
              profileItem={props.profile.location}
              icon={<FaMapMarkerAlt size="20" color={props.theme.icon} />}
              content={<Text>{props.profile.location}</Text>}
            />

            <ProfileItem
              profileItem={props.profile.publicRepos}
              icon={<GoRepo size="20" color={props.theme.icon} />}
              content={
                <Text>
                  {props.profile.publicRepos} public repos and{" "}
                  {props.profile.publicGists} public gists
                </Text>
              }
            />

            <ProfileItem
              profileItem={props.profile.followers}
              icon={<FaUserFriends size="20" color={props.theme.icon} />}
              content={
                <Text>
                  {props.profile.following} following and{" "}
                  {props.profile.followers} followers
                </Text>
              }
            />

            <ProfileItem
              profileItem={props.profile.createdAt}
              icon={<FaRegCalendarCheck size="20" color={props.theme.icon} />}
              content={
                <Text>
                  User since{" "}
                  {new Date(props.profile.createdAt).toLocaleDateString(
                    "en-US"
                  )}
                </Text>
              }
            />
          </InfoArea>
        </>
      )}
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => ({
  theme: state.theme,
  profile: state.profile,
  repositories: state.repositories,
  loading: state.loading
});

const mapDispatchToProps = (dispatch: (dispatch: StoreActions) => void) => ({
  loadProfileSearch: (user: string) => dispatch(loadProfileSearch(user)),
  loadRepositoriesSearch: (user: string) =>
    dispatch(loadRepositoriesSearch(user)),
  setLoading: () => dispatch(setLoading())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
