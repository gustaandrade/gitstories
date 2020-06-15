import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 42%;
  min-height: 100px;

  border: 3px solid ${props => props.theme.icon};
  border-radius: 15px;

  margin: 10px 0;
  padding: 0 15px;

  cursor: pointer;
  text-decoration: none;

  color: ${props => props.theme.paragraph};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
`;

export const IconArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 30%;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.p`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 14pt;

  padding: 0 5px;
`;

export const Paragraph = styled.p`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 10pt;

  padding: 0 5px;
`;

export const Text = styled.span`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 10pt;

  padding: 0 5px;
`;
