import { Pressable } from "react-native";
import styled from "styled-components";
import Typography from "../typography/typography.component";

export const Wrapper = styled(Pressable)`
  padding: 14px 16px;
  width: 100%;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  min-height: 68px;
`;

export const IconWrapper = styled.View``;

export const TextWrapper = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const Title = styled(Typography)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textContent};
`;

export const Description = styled(Typography)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textContent};
  opacity: 0.5;
  margin-top: 8px;
`;

export const ArrowWrapper = styled.View``;
