import styled, { css } from "styled-components/native";
import { Pressable, TextInput } from "react-native";
import Typography from "../typography/typography.component";

export const CustomTextInput = styled(TextInput)`
  padding: 0 10px;
  font-size: 16px;
  width: ${({ width }) => width ?? "100%"};
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

export const Wrapper = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.textContent};
  border-radius: 8px;
  padding: 10px 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 50px;
  ${({ onError }) =>
    onError &&
    css`
      margin-bottom: 8px;
    `}
`;

export const IconWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CloseBtn = styled(Pressable)`
  /* margin-right: 10px; */
`;

export const ViewBtn = styled(Pressable)`
  margin-left: 10px;
`;

export const Error = styled(Typography)`
  position: absolute;
  font-size: 12px;
  padding-left: 8px;
  bottom: -16px;
  z-index: 99;
`;
