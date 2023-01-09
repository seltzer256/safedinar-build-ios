import React from "react";
import { View, Pressable, Text } from "react-native";
import * as S from "./currency-top-bar.styles";
import NotificationIcon from "../../../assets/icons/tabs/notification.svg";
import LeftArrow from "../../../assets/arrow-left.svg";
import { useNavigation } from "@react-navigation/native";

const CurrencyTopBar = ({ name, flag }) => {
  const navigation = useNavigation();
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <Pressable
          onPress={() =>
            navigation.navigate("CurrenciesTab", { screen: "CurrenciesScreen" })
          }
        >
          <LeftArrow width={24} height={24} />
        </Pressable>
        <S.InfoWrapper>
          <S.FlagImage source={flag} resizeMode="cover" />
          <Text>{name.replace("\n", " ")}</Text>
        </S.InfoWrapper>
        <View width={24} height={24}>
          <NotificationIcon width={24} height={24} />
        </View>
      </S.TopWrapper>
    </S.Wrapper>
  );
};

export default CurrencyTopBar;
