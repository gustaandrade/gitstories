import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FaUserSlash, FaHome } from "react-icons/fa";

import { Container, Text, Button } from "./styles";

import { StoreActions } from "../../stores/actions/types";
import { StoreState } from "../../stores/reducers/types";
import { NotFoundProps } from "./types";

const NotFound: React.FC<NotFoundProps> = props => {
  return (
    <Container>
      <FaUserSlash size="96" color={props.theme.icon} />

      <Text>User not found.</Text>
      <Text>Please try a different username.</Text>

      <Link to="/">
        <Button>
          <FaHome size="30" color={props.theme.icon} />
        </Button>
      </Link>
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => ({
  theme: state.theme
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NotFound);
