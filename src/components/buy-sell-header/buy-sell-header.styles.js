import styled from "styled-components/native";
import { spacing } from "../../utils/utils";
import Typography from "../typography/typography.component";

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing}px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const CurrencyName = styled(Typography)`
  color: white;
  font-size: 16px;
`;

export const Value = styled(Typography)`
  color: white;
  font-size: 30px;
  margin: 8px 0;
  font-family: ${({ theme }) => theme.fonts.tertiary};
`;

export const BottomValue = styled(Typography)`
  color: white;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.tertiary};
`;

export const LeftWrapper = styled.View``;

export const FlagImage = styled.Image`
  width: 26px;
  height: 17px;
  margin-right: 8px;
`;
