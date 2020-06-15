import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 25%;
  height: 100%;

  border: 3px solid ${props => props.theme.icon};
  border-radius: 15px;

  padding: 20px;
  margin: 80px 10px 20px 20px;
`;

export const FixedArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ProfileItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 100%;

  padding: 5px 0;
`;

export const ItemIcon = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 10%;
`;

export const ItemContent = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 90%;
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
  color: ${props => props.theme.paragraph};
`;

export const Subtitle = styled.span`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 10pt;
  color: ${props => props.theme.paragraph};
`;

export const Paragraph = styled.p`
  font-family: Montserrat;
  font-weight: 300;
  font-size: 10pt;
  text-align: center;
  color: ${props => props.theme.paragraph};
`;
