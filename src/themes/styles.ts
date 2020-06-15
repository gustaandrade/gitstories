import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  overflow-x: hidden;

  background-color: ${props => props.theme.background};
`;
