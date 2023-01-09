import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const CustomCheckBox = styled(TouchableOpacity)`
  width: 25px;
  height: 25px;
  border-radius: 6px;
  border: 1px solid
    rgba(1, 31, 55, ${({ checked, opacity }) => (checked ? opacity ?? 1 : 0.5)});
`;

export const IconWrapper = styled.View`
  width: 18px;
  height: 18px;
  border-radius: 4px;
  margin: 2.5px;
  background: ${({ theme, iconColor }) => iconColor ?? theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;
