import React from "react";
import { connect } from "react-redux";

import { Container, Item, ItemIcon, ItemContent } from "./styles";

import { StoreActions } from "../../stores/actions/types";
import { StoreState } from "../../stores/reducers/types";
import { ProfileItemProps } from "./types";

const ProfileItem: React.FC<ProfileItemProps> = props => {
  return (
    <Container>
      {props.profileItem && (
        <Item>
          <ItemIcon>{props.icon}</ItemIcon>
          <ItemContent>{props.content}</ItemContent>
        </Item>
      )}
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => ({
  theme: state.theme
});

const mapDispatchToProps = (dispatch: (dispatch: StoreActions) => void) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileItem);
