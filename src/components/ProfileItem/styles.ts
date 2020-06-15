import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 100%;

  padding: 6px 0;
`;

export const ItemIcon = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 12%;
`;

export const ItemContent = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 88%;
`;
