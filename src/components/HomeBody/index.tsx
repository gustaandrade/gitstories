import React, { useState } from "react";
import { connect } from "react-redux";
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
  saveRepositoriesSearch,
  saveProfileSearch
} from "../../stores/actions";
import { StoreActions } from "../../stores/actions/types";
import { StoreState } from "../../stores/reducers/types";
import { ThemeEnum } from "../../themes/types";
import { HomeBodyProps } from "./types";
import { Repository, Profile } from "../../types";

const HomeBody: React.FC<HomeBodyProps> = props => {
  const [username, setUsername] = useState<string>("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onProfileSearch = async () => {
    await fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => saveProfile(data));

    await fetch(`https://api.github.com/users/${username}/repos`)
      .then(res => res.json())
      .then(data => saveRepositories(data));
  };

  const saveProfile = (data: any) => {
    let user: Profile = {
      id: data.id,
      login: data.login,
      url: data.html_url,
      name: data.name,
      blog: data.blog,
      location: data.location,
      email: data.email,
      bio: data.bio,
      publicRepos: data.public_repos,
      publicGists: data.public_gists,
      followers: data.followers,
      following: data.following,
      createdAt: data.created_at
    };

    props.saveProfileSearch(user);
  };

  const saveRepositories = (data: any) => {
    const repos: Repository[] = [];

    data.forEach((dt: any) => {
      let repo: Repository = {
        id: dt.id,
        owner: props.profile,
        name: dt.name,
        fullName: dt.full_name,
        url: dt.html_url,
        description: dt.description,
        fork: dt.fork,
        mainLanguage: dt.language,
        stargazers: dt.stargazers_count,
        watchers: dt.watchers_count,
        forks: dt.forks_count,
        defaultBranch: dt.default_branch,
        createdAt: dt.created_at,
        updatedAt: dt.updated_at
      };

      repos.push(repo);
    });

    props.saveRepositoriesSearch(repos);

    console.log(props.profile);
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

const mapStateToProps = (state: StoreState) => ({
  theme: state.theme,
  profile: state.profile!
});

const mapDispatchToProps = (dispatch: (dispatch: StoreActions) => void) => ({
  saveProfileSearch: (profile: Profile) => dispatch(saveProfileSearch(profile)),
  saveRepositoriesSearch: (repositories: Repository[]) =>
    dispatch(saveRepositoriesSearch(repositories))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeBody);
