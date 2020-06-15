import styled from "styled-components";

export const Container = styled.button`
  background: ${props => props.theme.background};
  border: 2px solid ${props => props.theme.paragraph};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  width: 5rem;
  height: 3rem;
  outline: none;

  transition: all 0.25s linear;

  * {
    transition: all 0.1s linear;
  }
`;
