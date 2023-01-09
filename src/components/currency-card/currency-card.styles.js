import styled from "styled-components/native";
import Typography from "../typography/typography.component";

export const FlagImage = styled.Image`
  width: 34px;
  height: 23px;
  margin-bottom: 14px;
`;

export const CardWrapper = styled.View`
  padding: 12px;
  width: 100px;
  height: 90px;
  background-color: white;
  margin-right: 12px;
  border-radius: 8px;
`;

export const CountryName = styled(Typography)`
  color: ${({ theme }) => theme.colors.textContent};
  font-size: 14px;
  line-height: 15px;
  letter-spacing: -0.08px;
`;
