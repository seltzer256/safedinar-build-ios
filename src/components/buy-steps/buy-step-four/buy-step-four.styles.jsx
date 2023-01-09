import { Pressable } from "react-native";
import styled from "styled-components/native";
import { spacing } from "../../../utils/utils";

export const Wrapper = styled.View`
  padding: ${spacing}px;
`;

export const OptionWrapper = styled(Pressable)`
  margin-bottom: 16px;
`;

export const ButtonWrapper = styled.Pressable`
  margin-top: 10px;
`;
