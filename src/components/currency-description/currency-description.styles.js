import styled from "styled-components/native";
import Typography from "../typography/typography.component";

export const Wrapper = styled.View`
  margin-top: 32px;
`;

export const Title = styled(Typography)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textContent};
`;

export const Description = styled(Typography)`
  font-size: 12px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.textContentLight};
  margin: 18px 0;
`;
