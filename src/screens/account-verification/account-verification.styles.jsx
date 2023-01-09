import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Typography from "../../components/typography/typography.component";

export const TitleWrapper = styled.View`
  border-bottom-width: 0.75px;
  border-bottom-color: rgba(0, 0, 0, 0.25);
  padding: 14px 28px;
`;

export const Title = styled(Typography)`
  font-size: 24px;
`;

Title.defaultProps = {
  variant: "title",
};

export const Wrapper = styled.View`
  padding: 14px 25px;
`;

export const Description = styled(Typography)`
  font-size: 14px;
  letter-spacing: 0.005px;
  color: ${({ theme }) => theme.colors.textContentLight};
`;

export const InformationWrapper = styled.View`
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}px`};
  padding-bottom: 12px;
  ${({ hideBorder }) =>
    !hideBorder &&
    `border-bottom-width: 1px;
  border-bottom-color: #cecece;`};
`;

export const TopWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const InformationTitle = styled(Typography)`
  font-size: 16px;
`;

InformationTitle.defaultProps = {
  variant: "title",
};

export const CopyButton = styled(TouchableOpacity)`
  margin-left: 16px;
`;

export const CardWrapper = styled.View`
  padding: 24px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  margin-top: 16px;
`;
