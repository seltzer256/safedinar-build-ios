import styled, { css } from "styled-components";
import Typography from "../typography/typography.component";

export const Wrapper = styled.View`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  margin-bottom: 44px;
  flex-direction: row;
  padding-top: 9px;
  padding-bottom: 14px;
`;

export const ItemWrapper = styled.View`
  padding: 3px 24px;
  width: 50%;
  ${({ border }) =>
    border &&
    css`
      border-left-width: 1px;
      border-left-color: #d8d8d8;
    `}
`;

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.colors.primaryDark};
  padding-bottom: 11px;
  font-size: 12px;
  line-height: 14px;
  opacity: 0.5;
`;

export const Value = styled(Typography)`
  font-size: 30px;
  line-height: 36px;
  letter-spacing: -0.078px;
  color: ${({ theme }) => theme.colors.primaryDark};
`;
