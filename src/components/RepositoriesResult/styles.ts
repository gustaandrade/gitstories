import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 75%;
  height: 100%;

  border: 3px solid ${props => props.theme.icon};
  border-radius: 15px;

  padding: 20px;
  margin: 80px 20px 20px 10px;
`;
