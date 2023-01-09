import styled from "styled-components/native";
import CheckIcon from "../../../../assets/check.svg";
import Typography from "../../typography/typography.component";

export const Wrapper = styled.View`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ValidationWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 15px;
`;

export const Description = styled(Typography)`
  opacity: 0.5;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.textContent};
`;

export const Icon = styled(CheckIcon)`
  margin-right: 8px;
`;
