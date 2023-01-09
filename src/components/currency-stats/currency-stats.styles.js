import { css } from "styled-components";
import styled from "styled-components/native";
import Typography from "../typography/typography.component";

export const Wrapper = styled.View``;

export const RangeWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 16px;
`;

export const RangeButton = styled.View`
  color: ${({ theme }) => theme.colors.text};
  padding: 4px 10px;
  margin-right: 8px;
  ${({ active }) =>
    active &&
    css`
      background: rgba(1, 31, 55, 0.05);
      border-radius: 100px;
    `}
`;

export const Range = styled(Typography)`
  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.primary};
    `}
`;
