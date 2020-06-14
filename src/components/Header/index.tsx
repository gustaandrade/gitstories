import React from "react";

import LogoWhite from "../../assets/logo-white.png";
import LogoBlack from "../../assets/logo-black.png";

import Toggle from "../Toggle";

import { Container, IconArea, MenuArea, Title, LogoImg } from "./styles";

import { HeaderProps } from "./types";
import { ThemeEnum } from "../../themes/types";

const Header: React.FC<HeaderProps> = props => {
  return (
    <Container>
      <IconArea>
        <LogoImg
          src={props.theme.name === ThemeEnum.LIGHT ? LogoBlack : LogoWhite}
          alt="gitstories"
        />
        {props.withLogo && <Title>gitstories</Title>}
      </IconArea>
      <MenuArea>
        <Toggle theme={props.theme} changeTheme={props.changeTheme} />
      </MenuArea>
    </Container>
  );
};

export default Header;
