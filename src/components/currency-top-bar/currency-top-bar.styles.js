import styled from "styled-components/native";
import { TextInput } from "react-native";
import { spacing } from "../../utils/utils";

export const TopWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const LogoImg = styled.Image`
  width: 160px;
  height: 20px;
`;

export const Wrapper = styled.View`
  padding: 15px ${spacing}px;
  background-color: white;
`;

export const NotificationIcon = styled.Image``;

export const InputWrapper = styled.View`
  background-color: #f0f0f0;
  flex-direction: row;
  padding: 12px 17px;
  border-radius: 50px;
  margin-top: ${spacing}px;
`;

export const CustomInput = styled(TextInput)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textContent};
  margin-left: 6px;
  font-size: 14px;
  line-height: 16px;
`;

export const InfoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FlagImage = styled.Image`
  width: 26px;
  height: 17px;
  margin-right: 8px;
`;
