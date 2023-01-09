import React from "react";
import { View, Pressable } from "react-native";
import * as S from "./buy-sell-top-bar.styles";
import NotificationIcon from "../../../assets/icons/tabs/notification.svg";
import LeftArrow from "../../../assets/arrow-left.svg";
import { useNavigation } from "@react-navigation/native";

const BuySellTopBar = ({ title, hideBackBtn, titleVariant }) => {
  const navigation = useNavigation();
  return (
    <S.Wrapper>
      <S.TopWrapper>
        {!hideBackBtn ? (
          <Pressable onPress={() => navigation.goBack()}>
            <LeftArrow width={24} height={24} />
          </Pressable>
        ) : (
          <View style={{ width: 24 }} />
        )}
        <S.InfoWrapper>
          <S.Title variant={titleVariant}>{title}</S.Title>
        </S.InfoWrapper>
        <View width={24} height={24}>
          <NotificationIcon width={24} height={24} />
        </View>
      </S.TopWrapper>
    </S.Wrapper>
  );
};

export default BuySellTopBar;
