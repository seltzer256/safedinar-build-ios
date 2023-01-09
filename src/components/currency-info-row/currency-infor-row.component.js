import React from "react";
import * as S from "./currency-info-row.styles";

const CurrencyInfoRow = ({ currencyName, buyValue, saleValue, index }) => {
  return (
    <S.InfoWrapper whiteBg={index % 2}>
      <S.ContentWrapper>
        {currencyName && <S.Title variant="title">{currencyName}</S.Title>}
      </S.ContentWrapper>
      <S.ContentWrapper>
        {buyValue && <S.Content>${buyValue}</S.Content>}
      </S.ContentWrapper>
      <S.ContentWrapper>
        {saleValue && <S.Content>${saleValue}</S.Content>}
      </S.ContentWrapper>
    </S.InfoWrapper>
  );
};

export default CurrencyInfoRow;
