import React from "react";
import { connect } from "react-redux";
import { FiSun, FiMoon } from "react-icons/fi";

import { Container } from "./styles";

import { DarkTheme, LightTheme } from "../../themes";

import { changeTheme } from "../../stores/actions";
import { StoreActions } from "../../stores/actions/types";
import { StoreState } from "../../stores/reducers/types";
import { ThemeEnum, Theme } from "../../themes/types";
import { ToggleProps } from "./types";

const Toggle: React.FC<ToggleProps> = props => {
  return (
    <Container
      onClick={() =>
        props.changeTheme(
          props.theme.name === ThemeEnum.LIGHT ? DarkTheme : LightTheme
        )
      }
    >
      <FiSun
        size={props.theme.name === ThemeEnum.LIGHT ? 28 : 18}
        color={
          props.theme.name === ThemeEnum.LIGHT
            ? props.theme.themeIcon
            : props.theme.icon
        }
      />

      <FiMoon
        size={props.theme.name === ThemeEnum.DARK ? 28 : 18}
        color={
          props.theme.name === ThemeEnum.DARK
            ? props.theme.themeIcon
            : props.theme.icon
        }
      />
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => ({
  theme: state.theme
});

const mapDispatchToProps = (dispatch: (dispatch: StoreActions) => void) => ({
  changeTheme: (theme: Theme) => dispatch(changeTheme(theme))
});

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
