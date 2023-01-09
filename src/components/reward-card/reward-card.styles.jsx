import styled from "styled-components/native";
import Typography from "../typography/typography.component";

export const Wrapper = styled.View`
  padding: 22px 20px;
  background: #ffffff;
  border-radius: 4px;
`;

export const Title = styled(Typography)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8px;
`;

Title.defaultProps = {
  variant: "subtitle",
};

export const Description = styled(Typography)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textContentLight};
`;
