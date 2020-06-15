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

export const Image = styled.img`
  width: 150px;
  height: 150px;

  border: 3px solid ${props => props.theme.icon};
  border-radius: 50%;
`;

export const Title = styled.p`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 12pt;
`;

export const Subtitle = styled.p`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 10pt;
`;

export const Paragraph = styled.p`
  font-family: Montserrat;
  font-weight: 300;
  font-size: 10pt;
`;
