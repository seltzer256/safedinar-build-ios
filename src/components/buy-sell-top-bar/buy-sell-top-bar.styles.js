import styled from "styled-components/native";
import { View, TextInput } from "react-native";
import { spacing } from "../../utils/utils";
import Typography from "../typography/typography.component";

export const TopWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Wrapper = styled.View`
  padding: 15px ${spacing}px;
  background-color: white;
`;

export const NotificationIcon = styled.Image``;

export const InfoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(Typography)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textContent};
`;
