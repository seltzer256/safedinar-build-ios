import styled from "styled-components/native";
import Typography from "../typography/typography.component";

export const Wrapper = styled.View`
  background-color: white;
  padding: 12px 17px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 9px;
`;

export const LeftWrapper = styled.View``;

export const Title = styled(Typography)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textContent};
`;

export const Description = styled(Typography)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textContent};
  margin-top: 6px;
`;
