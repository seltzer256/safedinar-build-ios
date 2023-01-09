import styled, { css } from "styled-components/native";
import Typography from "../typography/typography.component";
import { Pressable } from "react-native";

export const Wrapper = styled.View`
  /* flex: 1; */
`;

export const CheckBoxWrapper = styled(Pressable)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-left: 1px;
`;

export const TermsTitle = styled(Typography)`
  margin-left: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textContent};
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
  ${({ titleFontSize }) =>
    titleFontSize &&
    css`
      font-size: ${titleFontSize}px;
    `}
`;

export const TermsDescription = styled(Typography)`
  margin-left: 35px;
  font-size: 12px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.textContent};
`;

export const Error = styled(Typography)`
  position: relative;
  font-size: 12px;
  padding-left: 8px;
  /* z-index: 99; */
`;
