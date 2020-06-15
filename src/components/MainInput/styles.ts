import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: ${props => props.theme.background};

  transition: all 0.25s linear;
`;

export const LogoArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 48px;
  height: 48px;

  @media only screen and (min-width: 544px) {
    width: 64px;
    height: 64px;
  }
`;

export const Title = styled.p`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 24pt;
  color: ${props => props.theme.title};

  padding: 0 20px;
  margin: 0;

  @media only screen and (min-width: 544px) {
    font-size: 36pt;
  }
`;

export const Subtitle = styled.p`
  font-family: Montserrat;
  font-size: 12pt;
  font-weight: 300;
  color: ${props => props.theme.title};
  text-align: center;

  padding: 0 10px;

  @media only screen and (min-width: 544px) {
    font-size: 18pt;
  }
`;

export const Input = styled.input`
  width: 175px;
  height: 40px;

  font-family: Montserrat;
  font-weight: 300;
  font-size: 16pt;
  text-align: center;

  border: 2px solid ${props => props.theme.paragraph};
  border-radius: 25px;

  padding: 0 20px;
  margin: 50px 0;

  outline: none;

  @media only screen and (min-width: 768px) {
    width: 400px;
  }

  @media only screen and (min-width: 544px) {
    width: 350px;
  }
`;

export const Button = styled.button`
  width: 45px;
  height: 45px;

  border: 2px solid ${props => props.theme.paragraph};
  border-radius: 50%;

  margin: 0 10px;

  cursor: pointer;
  outline: none;

  @media only screen and (min-width: 544px) {
    margin: 0 20px;
  }
`;
