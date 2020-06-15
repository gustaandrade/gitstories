import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  min-height: 100px;

  background-color: ${props => props.theme.background};

  transition: all 0.25s linear;
`;

export const IconArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-left: 30px;

  a {
    display: flex;
    align-items: center;

    text-decoration: none;
  }
`;

export const MenuArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-right: 30px;
`;

export const LogoImg = styled.img`
  width: 48px;
  height: 48px;
`;

export const Title = styled.span`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 18pt;
  color: ${props => props.theme.title};

  padding-left: 10px;
`;
