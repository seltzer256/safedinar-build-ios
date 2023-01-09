import styled from "styled-components/native";
import Typography from "../typography/typography.component";

export const CardWrapper = styled.View`
  height: 80px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 18px;
`;

export const FlagWrapper = styled.View`
  background-color: white;
  height: 100%;
  width: 80px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
`;

export const FlagImage = styled.Image`
  width: 34px;
  height: 23px;
`;

export const TextWrapper = styled.View``;

export const Category = styled(Typography)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textContent};
  opacity: 0.5;
`;

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.colors.textContent};

  font-size: 14px;
  line-height: 18px;
`;
