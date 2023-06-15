import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 10px;
`;

export const ItemAllGray = styled.li`
  width: 100px;
  height: 15px;
  background-color: lightgray;
`;

export const ItemAllRed = styled.li`
  width: 100px;
  height: 15px;
  background-color: red;
`;

export const ItemEasy = styled.li`
  width: 100px;
  height: 15px;
  background-color: lightgray;

  &:first-child {
    background-color: red;
  }
`;

export const ItemMedium = styled.li`
  width: 100px;
  height: 15px;
  background-color: lightgray;

  &:nth-child(1) {
    background-color: orange;
  }
  &:nth-child(2) {
    background-color: orange;
  }
`;

export const ItemStrong = styled.li`
  width: 100px;
  height: 15px;
  background-color: green;
`;
