import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { spacing } from "../../utils/utils";
import Typography from "../typography/typography.component";

export const InfoWrapper = styled(ScrollView)`
  height: 200px;
`;

export const Wrapper = styled.View``;

export const TitlesWrapper = styled.View`
  color: ${({ theme }) => theme.colors.background};
  padding: 0px ${spacing}px 12px ${spacing}px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContentWrapper = styled.View`
  flex: 1;
`;

export const Title = styled(Typography)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textContent};
  line-height: 15px;
  letter-spacing: -0.078px;
  opacity: 0.5;
`;
