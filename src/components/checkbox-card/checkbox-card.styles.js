import { Pressable } from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  padding: 0 17px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #011f37;
`;

export const CheckBtn = styled(Pressable)``;

export const Check = styled.View`
  width: 25px;
  height: 25px;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.textContent};
  margin-right: 9px;
  justify-content: center;
  align-items: center;
`;

export const SmallCheckCircle = styled.View`
  width: 18px;
  height: 18px;
  background-color: ${({ theme }) => theme.colors.textContent};
  border-radius: 100px;
`;
