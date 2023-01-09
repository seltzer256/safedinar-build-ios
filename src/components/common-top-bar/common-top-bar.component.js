import React from "react";
import { View, Pressable } from "react-native";
import * as S from "./common-top-bar.styles";
import Logo from "../../../assets/original_logo.png";
import NotificationIcon from "../../../assets/icons/tabs/notification.svg";
import LeftArrow from "../../../assets/arrow-left.svg";

const CommonTopBar = ({ hideNotificationIcon, navigation }) => {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <Pressable onPress={() => navigation.navigate("Auth")}>
          <LeftArrow width={24} height={24} />
        </Pressable>
        <S.LogoImg resizeMode="contain" source={Logo} />
        <View width={24} height={24}>
          {!hideNotificationIcon && <NotificationIcon width={24} height={24} />}
        </View>
      </S.TopWrapper>
    </S.Wrapper>
  );
};

export default CommonTopBar;
