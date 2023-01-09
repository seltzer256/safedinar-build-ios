import styled from "styled-components/native";
import { marginBottom } from "../../utils/utils";
import Typography from "../typography/typography.component";

export const Title = styled(Typography)`
  padding: 38px 0;
  font-size: 20px;

  color: ${({ theme }) => theme.colors.textContent};
`;

export const Wrapper = styled.View``;

export const TextFieldWrapper = styled.View`
  margin-bottom: 34px;
`;

export const Separator = styled.View`
  width: 100%;
  height: 2px;
  background-color: #000000;
  opacity: 0.1;
  margin-top: -10px;
  margin-bottom: 34px;
`;

export const ButtonWrapper = styled.Pressable`
  margin-bottom: ${marginBottom}px;
`;
