import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

import LogoWhite from "../../assets/logo-white.png";
import LogoBlack from "../../assets/logo-black.png";

import {
  Container,
  LogoArea,
  InputArea,
  LogoImg,
  Title,
  Subtitle,
  Input,
  Button
} from "./styles";

import { HomeBodyProps } from "./types";
import { ThemeEnum } from "../../themes/types";

const HomeBody: React.FC<HomeBodyProps> = props => {
  const [name, setName] = useState("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onProfileSearch = () => {
    fetch(`https://api.github.com/users/${name}/repos`)
      .then(res => res.json())
      .then(data => console.log(data));
  };

  return (
    <Container>
      <LogoArea>
        <LogoImg
          src={props.theme.name === ThemeEnum.LIGHT ? LogoBlack : LogoWhite}
          alt="gitstories"
        />
        <Title>gitstories</Title>
      </LogoArea>

      <Subtitle>gitstories</Subtitle>

      <InputArea>
        <Input type="input" onChange={e => onInputChange(e)} />

        <Button onClick={() => onProfileSearch()}>
          <FaSearch size="18" />
        </Button>
      </InputArea>
    </Container>
  );
};

export default HomeBody;
