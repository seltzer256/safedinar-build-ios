import styled from "styled-components/native";
import Typography from "../../components/typography/typography.component";

export const Wrapper = styled.View`
  padding: 30px 25px;
`;

export const Title = styled(Typography)`
  font-size: 20px;
`;

Title.defaultProps = {
  variant: "title",
};

export const Description = styled(Typography)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textContentLight};
  margin-bottom: 25px;
`;

export const CardWrapper = styled.View`
  margin-bottom: 8px;
`;

export const TopWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
  /* justify-content: space-between; */
`;

export const TestBtn = styled.View`
  background: ${({ theme }) => theme.colors.primary};
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 14px;
  margin-left: 12px;
`;

export const TestBtnText = styled(Typography)`
  color: white;
`;
