import styled from "styled-components/native";
import Typography from "../../components/typography/typography.component";

export const TitleWrapper = styled.View`
  border-bottom-width: 0.75px;
  border-bottom-color: rgba(0, 0, 0, 0.25);
  padding: 14px 28px;
`;

export const Title = styled(Typography)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.secondary};
`;

Title.defaultProps = {
  variant: "title",
};

export const Description = styled(Typography)`
  font-size: 14px;
  letter-spacing: 0.005px;
  color: ${({ theme }) => theme.colors.textContentLight};
`;

export const Wrapper = styled.View`
  padding: 14px 25px;
`;

export const Subtitle = styled(Typography)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
`;

Subtitle.defaultProps = {
  variant: "title",
};

export const BottomWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
