import styled from "styled-components/native";
import { Dimensions } from "react-native";
import myImage from "../../../assets/img/onboarding-1.png";
import { Image } from "react-native";
import CustomButton from "../../components/custom-button/custom-button.component";
import { Paragraph } from "react-native-paper";
import Typography from "../../components/typography/typography.component";
import { StatusBar } from "react-native";

const { width, height } = Image.resolveAssetSource(myImage);
const win = Dimensions.get("window");

export const BgGradient = styled.ImageBackground`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Title = styled(Typography)`
  z-index: 2;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.textContent};
  line-height: 38px;
  padding-top: 6px;
`;

export const ContentWrapper = styled.SafeAreaView`
  margin-left: ${({ theme }) => theme.spacing.normal}px;
  margin-right: ${({ theme }) => theme.spacing.normal}px;
  flex-direction: column;
  justify-content: space-between;
  padding-top: ${StatusBar.currentHeight && `${StatusBar.currentHeight}px`};
`;

export const Img = styled.Image`
  width: 100%;
  margin: auto;
  height: ${win.height - 350}px;
`;

export const TextWrapper = styled.View`
  max-width: 75%;
`;
export const BottomContentWrapper = styled.View`
  margin-top: 30px;
  width: 100%;
`;

export const Description = styled(Paragraph)``;

export const BottomWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SkipBtn = styled(CustomButton)`
  margin-left: auto;
  width: 65px;
`;

export const NextBtn = styled(CustomButton)`
  margin-left: auto;
  width: 100px;
`;

export const PaginationWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PaginationDot = styled.View`
  width: 10px;
  margin-left: 4px;
  margin-right: 4px;
  height: 10px;
  border-radius: ${10 / 2}px;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease;
  opacity: ${({ active }) => (active ? "1" : "0.2")};
`;
