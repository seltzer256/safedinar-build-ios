import React from "react";
import * as S from "./currency-buy-sell.styles";

const CurrencyBuySell = () => {
  return (
    <S.Wrapper>
      <S.ItemWrapper>
        <S.Title variant="label">Buy</S.Title>
        <S.Value variant="title">$1,075</S.Value>
      </S.ItemWrapper>
      <S.ItemWrapper border>
        <S.Title variant="label">Sell</S.Title>
        <S.Value variant="title">$670</S.Value>
      </S.ItemWrapper>
    </S.Wrapper>
  );
};

export default CurrencyBuySell;
