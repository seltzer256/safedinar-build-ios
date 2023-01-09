import styled from "styled-components/native";
import { spacing } from "../../utils/utils";
import Typography from "../typography/typography.component";

export const GridWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const TopWrapper = styled.View`
  padding: 0 ${spacing}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled(Typography)`
  font-size: 20px;
  line-height: 20px;
  margin: 38px 0 30px;
`;

export const CurrencyItem = styled.View`
  height: 90px;
  border-radius: 8px;
  background-color: white;
  //margin: 0 10px 10px 0;
  padding: 12px;
`;

export const FlagImage = styled.Image`
  width: 34px;
  height: 23px;
  margin-bottom: 14px;
`;

export const CountryName = styled(Typography)`
  color: ${({ theme }) => theme.colors.textContent};
  font-size: 14px;
  line-height: 15px;
  letter-spacing: -0.08px;
`;

export const FlexWrapper = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Card = styled.Pressable`
  width: 33.33%;
`;
