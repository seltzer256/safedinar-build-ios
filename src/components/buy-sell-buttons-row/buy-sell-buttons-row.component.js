import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as S from "./buy-sell-buttons-row.styles";
import { Pressable } from "react-native";

const BuySellButtonsRow = () => {
  const navigation = useNavigation();
  return (
    <S.Wrapper>
      <S.Button
        type="tertiary"
        style={{ marginRight: 16 }}
        onPress={() => navigation.navigate("SellingScreen")}
      >
        Sell
      </S.Button>
      <S.Button onPress={() => navigation.navigate("BuyingScreen")}>
        Buy
      </S.Button>
    </S.Wrapper>
  );
};

export default BuySellButtonsRow;
