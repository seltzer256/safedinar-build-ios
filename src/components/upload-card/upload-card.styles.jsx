import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import Typography from "../typography/typography.component";

export const Wrapper = styled.View`
  padding: 24px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
`;

export const Title = styled(Typography)`
  font-weight: 600;
  font-size: 16px;
  color: #232323;
  padding-bottom: 16px;
`;

Title.defaultProps = {
  variant: "title",
};

export const Description = styled(Typography)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textContentLight};
`;

export const Subtitle = styled(Typography)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  max-width: 200px;
  align-self: center;
`;

Subtitle.defaultProps = {
  variant: "subtitle",
};

export const UploadedImage = styled(TouchableOpacity)`
  width: 100%;
  background: #dce9f3;
  border-radius: 8px;
  padding: 16px 12px;
  white-space: nowrap;
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}px`};
`;

export const ImageName = styled(Typography)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
`;

ImageName.defaultProps = {
  variant: "title",
};
