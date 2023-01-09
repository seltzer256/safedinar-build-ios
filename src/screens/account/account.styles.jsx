import styled from "styled-components";
import Typography from "../../components/typography/typography.component";

export const Wrapper = styled.View`
  padding: 25px;
`;

export const Title = styled(Typography)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textContent};
  margin-bottom: 25px;
`;
