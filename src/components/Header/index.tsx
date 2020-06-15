import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import LogoWhite from "../../assets/logo-white.png";
import LogoBlack from "../../assets/logo-black.png";

import Toggle from "../Toggle";

import { Container, IconArea, MenuArea, Title, LogoImg } from "./styles";

import { StoreState } from "../../stores/reducers/types";
import { ThemeEnum } from "../../themes/types";
import { HeaderProps } from "./types";

const Header: React.FC<HeaderProps> = props => {
  return (
    <Container>
      <IconArea>
        <Link to="/">
          <LogoImg
            src={props.theme.name === ThemeEnum.LIGHT ? LogoBlack : LogoWhite}
            alt="gitstories"
          />
          {props.withTitle && <Title>gitstories</Title>}
        </Link>
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

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
