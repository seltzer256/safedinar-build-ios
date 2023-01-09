import styled from "styled-components/native";
import Typography from "../../typography/typography.component";

export const Wrapper = styled.View`
  border-radius: 8px;
  background-color: white;
  padding: 12px 21px;
  margin-bottom: 19px;
`;

export const Title = styled(Typography)`
  font-size: 14px;
  line-height: 15px;
  opacity: 0.5;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

export const Subtitle = styled(Typography)`
  margin-top: 6px;
  font-size: 14px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.textContent};
`;

export const Description = styled(Typography)`
  margin-top: 6px;
  font-size: 12px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.textContentLight};
`;
