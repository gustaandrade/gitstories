import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 400px;
  height: 100%;
`;

export const Text = styled.span`
  font-family: Montserrat;
  font-size: 18pt;
  font-weight: 700;
  text-align: center;

  padding: 10px 0;

  color: ${props => props.theme.paragraph};

  @media only screen and (min-width: 544px) {
    font-size: 24pt;
  }
`;

export const Button = styled.button`
  width: 60px;
  height: 60px;

  border: 2px solid ${props => props.theme.paragraph};
  border-radius: 50%;

  margin: 20px 0;

  cursor: pointer;
  outline: none;
`;
