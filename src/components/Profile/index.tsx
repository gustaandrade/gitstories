import React from "react";
import { connect } from "react-redux";

import { Container, Image, Title, Paragraph } from "./styles";

import { StoreActions } from "../../stores/actions/types";
import { StoreState } from "../../stores/reducers/types";
import { ProfileProps } from "./types";

const Profile: React.FC<ProfileProps> = props => {
  return (
    <Container>
      {/* {props.profile && (
        <>
          <Image src={props.profile.avatar} />
          <Title>{props.profile.login}</Title>
          <Title>{props.profile.name}</Title>
          <Title>{props.profile.bio}</Title>
          <Title>{props.profile.url}</Title>
        </>
      )} */}
      <>
        <Image src={"https://avatars1.githubusercontent.com/u/7848520?v=4"} />
        <Title>{"@gustaandrade"}</Title>
        <Title>{"@gustaandrade"}</Title>
        <Title>{"@gustaandrade"}</Title>
        <Title>{"@gustaandrade"}</Title>
        <Title>{"@gustaandrade"}</Title>
        <Title>{"@gustaandrade"}</Title>
        <Title>{"@gustaandrade"}</Title>
        <Title>{"@gustaandrade"}</Title>
        <Title>{"@gustaandrade"}</Title>
        <Title>{"@gustaandrade"}</Title>
      </>
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => ({
  theme: state.theme,
  profile: state.profile!
});

const mapDispatchToProps = (dispatch: (dispatch: StoreActions) => void) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
