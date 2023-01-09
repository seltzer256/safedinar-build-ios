import styled from "styled-components/native";
import { marginBottom } from "../../utils/utils";
import Typography from "../typography/typography.component";

export const Title = styled(Typography)`
  padding: 38px 0 26px 0;
  font-size: 20px;

  color: ${({ theme }) => theme.colors.textContent};
`;

export const ButtonWrapper = styled.Pressable`
  margin-bottom: ${marginBottom}px;
`;

export const ButtonsWrapper = styled.View`
  margin-top: 13px;
  margin-bottom: ${marginBottom}px;
  gap: 16px;
`;
