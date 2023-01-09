import { Snackbar } from "react-native-paper";
import styled from "styled-components";
import { css } from "styled-components/native";
import Typography from "../typography/typography.component";

export const Wrapper = styled.View`
  padding: 38px 25px;
`;

export const Title = styled(Typography)`
  font-size: 20px;
  letter-spacing: -0.078px;
  color: ${({ theme }) => theme.colors.textContent};
  margin-bottom: 48px;
  ${({ bottom }) =>
    bottom &&
    css`
      margin-bottom: 18px;
    `}
`;

export const TextFieldWrapper = styled.View`
  margin-bottom: 32px;
  ${({ last }) =>
    last &&
    css`
      margin-bottom: 22px;
    `}
`;

export const Hr = styled.View`
  height: 1px;
  opacity: 0.1;
  background-color: black;
  margin-bottom: 32px;
`;

export const ChangePasswordText = styled(Typography)`
  font-size: 14px;
  text-align: center;
  text-decoration-line: underline;
  color: black;
  margin-bottom: 22px;
`;

export const Description = styled(Typography)`
  font-size: 14px;
  letter-spacing: -0.078px;
  color: ${({ theme }) => theme.colors.textContentLight};
`;

export const CheckBoxWrapper = styled.View`
  padding-top: 26px;
  padding-bottom: 36px;
`;
