import React from "react";
import { connect } from "react-redux";
import { FiLoader } from "react-icons/fi";

import { Container } from "./styles";

import { StoreActions } from "../../stores/actions/types";
import { StoreState } from "../../stores/reducers/types";
import { LoadingProps } from "./types";

const Loading: React.FC<LoadingProps> = props => {
  return (
    <Container>
      <FiLoader size="96" color={props.theme.icon} />
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => ({
  theme: state.theme
});

const mapDispatchToProps = (dispatch: (dispatch: StoreActions) => void) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
