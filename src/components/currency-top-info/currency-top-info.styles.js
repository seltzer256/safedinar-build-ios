import styled from "styled-components/native";
import Typography from "../typography/typography.component";

export const Wrapper = styled.View`
  padding-top: 30px;
  padding-bottom: 24px;
`;

export const TopTitle = styled(Typography)`
  font-size: 14px;

  opacity: 0.5;
  color: ${({ theme }) => theme.colors.textContent};
`;

export const MiddleTitle = styled(Typography)`
  font-size: 30px;
  line-height: 33px;
  color: ${({ theme }) => theme.colors.textContent};
  padding: 10px 0;
`;

export const Date = styled(Typography)`
  font-size: 14px;

  opacity: 0.5;
  color: ${({ theme }) => theme.colors.textContent};
`;
