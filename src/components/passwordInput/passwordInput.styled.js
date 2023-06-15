import { styled } from 'styled-components';

export const Container = styled.div`
  margin-bottom: 30px;
  position: relative;
`;

export const Input = styled.input`
  width: 516px;
  height: 52px;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 50px;
  font-size: 25px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
`;
