import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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

import {
  loadProfileSearch,
  loadRepositoriesSearch,
  setLoading
} from "../../stores/actions";
import { StoreActions } from "../../stores/actions/types";
import { StoreState } from "../../stores/reducers/types";
import { ThemeEnum } from "../../themes/types";
import { HomeBodyProps } from "./types";

const HomeBody: React.FC<HomeBodyProps> = props => {
  const [username, setUsername] = useState<string>("");

  function onProfileSearch() {
    props.setLoading();
    props.loadProfileSearch(username);
    props.loadRepositoriesSearch(username);
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
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

        <Link to="/search">
          <Button onClick={() => onProfileSearch()}>
            <FaSearch size="18" />
          </Button>
        </Link>
      </InputArea>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeBody);
