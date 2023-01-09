import styled from "styled-components/native";
import { TextInput } from "react-native";
import Typography from "../typography/typography.component";

export const Wrapper = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;

export const DenominationWrapper = styled.View`
  width: 50%;
  padding-right: 7px;
`;

export const NotesWrapper = styled.View`
  width: 50%;
  padding-left: 7px;
`;

export const InputWrapper = styled.View`
  border-radius: 8px;
  padding: 0 17px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  border: 1px solid #011f37;
`;

export const CustomInput = styled(TextInput)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textContent};
  font-size: 14px;
  width: 100%;
`;

export const Error = styled(Typography)`
  font-size: 12px;
  padding-left: 8px;
`;
