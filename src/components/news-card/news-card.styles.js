import styled from "styled-components/native";
import Typography from "../typography/typography.component";

export const CardWrapper = styled.View`
  width: 155px;
  height: 165px;
  background-color: white;
  margin-right: 12px;
  border-radius: 8px;
`;

export const FeaturedImage = styled.Image`
  width: 100%;
  height: 50%;
`;

export const Category = styled(Typography)`
  text-transform: uppercase;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.accent};
  line-height: 15px;
`;
export const NewsTitle = styled(Typography)`
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.textContent};
  padding: 5px 0;
`;

export const PublicationDate = styled(Typography)`
  font-size: 10px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.textContent};
  opacity: 0.5;
`;

export const TextWrapper = styled.View`
  padding: 9px 12px;
  height: 50%;
`;
