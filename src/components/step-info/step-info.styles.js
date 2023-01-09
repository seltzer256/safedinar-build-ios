import { css } from "styled-components";
import styled from "styled-components/native";
import Typography from "../typography/typography.component";
import CheckIcon from "../../../assets/check.svg";

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const StepWrapper = styled.View`
  width: 28px;
  height: 28px;
  background-color: #dae1e7;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  margin-right: 11px;
  ${({ isCurrentStep }) =>
    isCurrentStep &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
    `}
`;

export const Step = styled(Typography)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  ${({ isCurrentStep }) =>
    isCurrentStep &&
    css`
      color: white;
    `}
`;

export const Description = styled(Typography)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textContent};
`;

export const Icon = styled(CheckIcon)`
  padding: 14px;
`;
