import styled from "styled-components/native";
import Typography from "../../components/typography/typography.component";
import { spacing } from "../../utils/utils";

export const Wrapper = styled.ScrollView`
  background-color: #f0f0f0;
  padding: 0 ${spacing}px;
`;

export const ChipsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 18px 0;
`;

export const Chip = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 8px;
  margin-right: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ChipText = styled(Typography)`
  font-size: 14px;
  line-height: 15px;
  color: white;
  margin-right: 8px;
`;

export const SearchInfoWrapper = styled.View`
  padding: 10px 0 30px;
`;

export const InfoTitle = styled(Typography)`
  font-size: 20px;
  line-height: 20px;
  color: #011f3780;
`;

export const SearchParameter = styled(Typography)`
  color: ${({ theme }) => theme.colors.textContent};

  font-size: 20px;
  line-height: 20px;
`;
