import React from "react";
import * as S from "./currency-top-info.styles";

const CurrencyTopInfo = () => {
  return (
    <S.Wrapper>
      <S.TopTitle>1 Iraqi Dinar equals</S.TopTitle>
      <S.MiddleTitle variant="title">
        0.00068 United {"\n"}States Dollar
      </S.MiddleTitle>
      <S.Date>Apr 12, 16:36 UTC</S.Date>
    </S.Wrapper>
  );
};

export default CurrencyTopInfo;
