import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import { spacing } from "../../utils/utils";
// import LinearGradient from 'react-native-linear-gradient';
import Typography from "../typography/typography.component";

export const Container = styled.View`
  padding: 0 ${spacing}px;
  margin: 38px 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Background = styled(LinearGradient)`
  padding: 22px ${spacing}px 30px;
  align-items: center;
  border-radius: 8px;
`;

export const Title = styled(Typography)`
  font-size: 16px;
  line-height: 18px;
  color: white;
  padding: 10px 0;
  text-align: center;
`;

export const Subtitle = styled(Typography)`
  font-size: 12px;
  line-height: 12px;
  color: white;
  opacity: 0.5;
`;
