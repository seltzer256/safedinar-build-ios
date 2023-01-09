import styled from "styled-components/native";
import { spacing } from "../../utils/utils";
import Typography from "../typography/typography.component";

export const TopWrapper = styled.View`
  padding: ${spacing}px 0;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled(Typography)`
  padding: 0 ${spacing}px;
  color: ${({ theme }) => theme.colors.textContent};
  font-size: 20px;

  letter-spacing: -0.08px;
`;

export const SliderWrapper = styled.View`
  padding: ${spacing}px 0;
`;
