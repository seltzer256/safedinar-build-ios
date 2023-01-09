import React from "react";
import * as S from "./currencies-info.styles";
import CurrencyInfoRow from "../currency-info-row/currency-infor-row.component";

const CurrenciesInfo = () => {
  const currenciesData = [
    { currencyName: "Iraq Dinar", buyValue: "0.00020", saleValue: "0.00020" },
    { currencyName: "Mexican", buyValue: "0.00020", saleValue: "0.00020" },
    { currencyName: "Iraq Dinar", buyValue: "0.00020", saleValue: "0.00020" },
    { currencyName: "Iraq Dinar", buyValue: "0.00020", saleValue: "0.00020" },
    { currencyName: "Iraq Dinar", buyValue: "0.00020", saleValue: "0.00020" },
    { currencyName: "Iraq Dinar", buyValue: "0.00020", saleValue: "0.00020" },
    { currencyName: "Iraq Dinar", buyValue: "0.00020", saleValue: "0.00020" },
    { currencyName: "Iraq Dinar", buyValue: "0.00020", saleValue: "0.00020" },
  ];
  return (
    <S.Wrapper>
      <S.TitlesWrapper>
        <S.ContentWrapper>
          <S.Title variant="title">Currency</S.Title>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <S.Title variant="title">Buy</S.Title>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <S.Title variant="title">Sale</S.Title>
        </S.ContentWrapper>
      </S.TitlesWrapper>
      <S.InfoWrapper>
        {currenciesData.map((currencyInfo, index) => (
          <CurrencyInfoRow
            key={`currency-info-row-${index}`}
            {...currencyInfo}
            index={index}
          />
        ))}
      </S.InfoWrapper>
    </S.Wrapper>
  );
};

export default CurrenciesInfo;
