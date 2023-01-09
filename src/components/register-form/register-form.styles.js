import styled from "styled-components/native";
import { spacing } from "../../utils/utils";
import Typography from "../typography/typography.component";

export const Title = styled(Typography)`
  font-size: 20px;
  padding: ${spacing}px 0 34px;
  color: ${({ theme }) => theme.colors.textContent};
`;

export const Separator = styled.View`
  width: 100%;
  height: 2px;
  background-color: #000000;
  opacity: 0.1;
  margin-top: -10px;
  margin-bottom: 34px;
`;

export const ButtonWrapper = styled.View`
  margin-top: 24px;
  margin-bottom: 54px;
`;

export const TextFieldWrapper = styled.View`
  margin-bottom: 34px;
`;
