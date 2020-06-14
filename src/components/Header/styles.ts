import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 80px;

  background-color: ${props => props.theme.background};
`;

export const IconArea = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuArea = styled.div``;

export const LogoImg = styled.img`
  width: 48px;
  height: 48px;
`;

export const Title = styled.h1`
  color: ${props => props.theme.title};
`;
