import { Snackbar } from "react-native-paper";
import styled from "styled-components";
import { css } from "styled-components/native";
import Typography from "../typography/typography.component";
import CheckIcon from "../../../assets/check.svg";
import PlusIcon from "../../../assets/account/plus.svg";

export const Wrapper = styled.View`
  padding: 38px 25px;
`;

export const Title = styled(Typography)`
  font-size: 20px;
  letter-spacing: -0.078px;
  color: ${({ theme }) => theme.colors.textContent};
  margin-bottom: 22px;
  ${({ bottom }) =>
    bottom &&
    css`
      margin-bottom: 18px;
    `}
`;

export const AddressTitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 26px;
`;

export const AddressTitle = styled(Typography)`
  font-size: 14px;
`;

export const TextFieldWrapper = styled.View`
  margin-bottom: 32px;
  ${({ last }) =>
    last &&
    css`
      margin-bottom: 34px;
    `}
`;

export const Hr = styled.View`
  height: 1px;
  background-color: black;
  margin-bottom: 32px;
  opacity: 0.5;
`;

export const CheckBoxWrapper = styled.View`
  /* padding-top: 26px; */
  margin-bottom: 16px;
`;

export const StyledSnackBar = styled(Snackbar)`
  z-index: 99;
  background-color: ${({ theme }) => theme.colors.success};
  flex: 1;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const Message = styled(Typography)`
  color: ${({ theme }) => theme.colors.surface};
  text-align: center;
  flex: 1;
`;

export const Icon = styled(CheckIcon)`
  margin-left: 10px;
  padding: 10px;
`;

export const ButtonWrapper = styled.View`
  padding-bottom: 32px;
`;

export const Plus = styled(PlusIcon)``;
