import React, { useEffect } from "react";
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
  ProfileItem,
  ItemIcon,
  ItemContent,
  Image,
  Title,
  Subtitle,
  Paragraph
} from "./styles";

import {
  loadProfileSearch,
  loadRepositoriesSearch,
  setLoading
} from "../../stores/actions";
import { StoreActions } from "../../stores/actions/types";
import { StoreState } from "../../stores/reducers/types";
import { ProfileProps } from "./types";

const Profile: React.FC<ProfileProps> = props => {
  useEffect(() => {
    props.setLoading();
    props.loadProfileSearch("gustaandrade");
    props.loadRepositoriesSearch("gustaandrade");
  });

  return (
    <Container>
      {props.profile && (
        <>
          <FixedArea>
            <Image src={props.profile.avatar} />
            <Title>{props.profile.name}</Title>
            <Title>@{props.profile.login}</Title>
            <Paragraph>{props.profile.bio}</Paragraph>
          </FixedArea>

          <InfoArea>
            <ProfileItem>
              <ItemIcon>
                <FaGithubAlt size="20" color={props.theme.icon} />
              </ItemIcon>

              <ItemContent>
                <a href={props.profile.url}>
                  <Subtitle>{props.profile.url}</Subtitle>
                </a>
              </ItemContent>
            </ProfileItem>

            <ProfileItem>
              <ItemIcon>
                <FaGlobe size="20" color={props.theme.icon} />
              </ItemIcon>

              <ItemContent>
                <a href={props.profile.blog}>
                  <Subtitle>{props.profile.blog}</Subtitle>
                </a>
              </ItemContent>
            </ProfileItem>

            <ProfileItem>
              <ItemIcon>
                <FaMapMarkerAlt size="20" color={props.theme.icon} />
              </ItemIcon>

              <ItemContent>
                <Subtitle>{props.profile.location}</Subtitle>
              </ItemContent>
            </ProfileItem>

            {props.profile.email && (
              <ProfileItem>
                <ItemIcon>
                  <FaEnvelope size="20" color={props.theme.icon} />
                </ItemIcon>

                <ItemContent>
                  <Subtitle>{props.profile.email}</Subtitle>
                </ItemContent>
              </ProfileItem>
            )}

            <ProfileItem>
              <ItemIcon>
                <FaUserFriends size="20" color={props.theme.icon} />
              </ItemIcon>

              <ItemContent>
                <Subtitle>
                  {props.profile.following} following and{" "}
                  {props.profile.followers} followers
                </Subtitle>
              </ItemContent>
            </ProfileItem>

            <ProfileItem>
              <ItemIcon>
                <FaRegCalendarCheck size="20" color={props.theme.icon} />
              </ItemIcon>

              <ItemContent>
                <Subtitle>
                  User since{" "}
                  {new Date(props.profile.createdAt).toLocaleDateString(
                    "en-US"
                  )}
                </Subtitle>
              </ItemContent>
            </ProfileItem>

            <ProfileItem>
              <ItemIcon>
                <GoRepo size="20" color={props.theme.icon} />
              </ItemIcon>

              <ItemContent>
                <Subtitle>
                  {props.profile.publicRepos} public repos and{" "}
                  {props.profile.publicGists} public gists
                </Subtitle>
              </ItemContent>
            </ProfileItem>
          </InfoArea>
        </>
      )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
