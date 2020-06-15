import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 40%;

  border: 3px solid ${props => props.theme.icon};
  border-radius: 15px;

  padding: 20px;
`;

export const FixedArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 40%;

  margin-right: 20px;
`;

export const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 60%;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;

  border: 3px solid ${props => props.theme.icon};
  border-radius: 50%;
`;

export const Title = styled.span`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 16pt;
  color: ${props => props.theme.paragraph};

  padding-top: 20px;
`;

export const Subtitle = styled.span`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 12pt;
  color: ${props => props.theme.icon};

  padding-top: 10px;
`;

export const Paragraph = styled.span`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 10pt;
  text-align: center;
  color: ${props => props.theme.paragraph};

  padding: 10px 0;
`;

export const Text = styled.span`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 10pt;
  color: ${props => props.theme.paragraph};
`;
