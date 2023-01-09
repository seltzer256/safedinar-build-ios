import styled from "styled-components/native";
import { Animated } from "react-native";
import Typography from "../../components/typography/typography.component";
import CustomButtonComponent from "../../components/custom-button/custom-button.component";

export const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: center;
`;

export const LogoImg = styled.Image`
  width: 75%;
  height: 40px;
  align-self: center;
  position: absolute;
`;

export const LogoBg = styled.Image`
  position: absolute;
  align-self: center;
  width: 100%;
`;

export const BgGradient = styled.ImageBackground`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const ContentWrapper = styled(Animated.View)`
  background-color: white;
  /* height: 48%; */
  width: 100%;
  align-self: flex-end;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  justify-content: center;
`;

export const ActionsWrapper = styled.View`
  padding: 55px 30px;
`;

export const Title = styled(Typography)`
  font-size: 20px;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.textContent};
  text-align: center;
  max-width: 240px;
  align-self: center;
  margin-bottom: 28px;
`;

export const LinkAction = styled(Typography)`
  color: ${({ theme }) => theme.colors.textContent};
  text-align: center;
  margin-top: 32px;

  font-size: 14px;
  text-decoration: underline;
`;

export const CustomButton = styled(CustomButtonComponent)`
  z-index: 2;
`;
