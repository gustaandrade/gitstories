import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";

import { Container } from "./styles";

import { ToggleProps } from "./types";
import { ThemeEnum } from "../../themes/types";

const Toggle: React.FC<ToggleProps> = props => {
  return (
    <Container onClick={props.changeTheme}>
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

export default Toggle;
