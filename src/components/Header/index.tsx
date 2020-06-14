import React from "react";
import { connect } from "react-redux";

import LogoWhite from "../../assets/logo-white.png";
import LogoBlack from "../../assets/logo-black.png";

import Toggle from "../Toggle";

import { Container, IconArea, MenuArea, Title, LogoImg } from "./styles";

import { changeTheme } from "../../stores/actions";
import { StoreActions } from "../../stores/actions/types";
import { StoreState } from "../../stores/reducers/types";
import { ThemeEnum, Theme } from "../../themes/types";
import { HeaderProps } from "./types";

const Header: React.FC<HeaderProps> = props => {
  return (
    <Container>
      <IconArea>
        <LogoImg
          src={props.theme.name === ThemeEnum.LIGHT ? LogoBlack : LogoWhite}
          alt="gitstories"
        />
        {props.withTitle && <Title>gitstories</Title>}
      </IconArea>

      <MenuArea>
        <Toggle />
      </MenuArea>
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => ({
  theme: state.theme
});

const mapDispatchToProps = (dispatch: (dispatch: StoreActions) => void) => ({
  changeTheme: (theme: Theme) => dispatch(changeTheme(theme))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
