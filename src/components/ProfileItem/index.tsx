import React from "react";

import { Container, Item, ItemIcon, ItemContent } from "./styles";

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

export default ProfileItem;
