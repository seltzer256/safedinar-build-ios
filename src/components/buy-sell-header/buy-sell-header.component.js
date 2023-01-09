import React from "react";
import * as S from "./buy-sell-header.styles";
import MexicoFlag from "../../../assets/flags/mexico.jpg";

const BuySellHeader = () => {
  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <S.CurrencyName>Iraqui Dinar</S.CurrencyName>
        <S.Value>$500.00,00</S.Value>
        <S.BottomValue>USD 500</S.BottomValue>
      </S.LeftWrapper>
      <S.FlagImage source={MexicoFlag} resizeMode="cover" />
    </S.Wrapper>
  );
};

export default BuySellHeader;
